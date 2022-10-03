import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import BoxDefault from "../../components/BoxDefault"
import BoxUrl from "../../components/BoxUrl"
import CircularChart from "../../components/CircularChart"
import InputSearch from "../../components/InputSearch"
import NumberChart from "../../components/NumberChart"
import api from "../../services/api"
import { GlobalArea } from "../../styles/global"
import { ContainerChart, ContainerInput, ContainerTexts, HomeContainer, LeftContainer, RightContainer, RowHome, RowUrls, Space, SpanText } from "./styles"

const Home: React.FC = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getData();
    }, [])

    const getData = () => {
        api
        .get(`/shorts`)
        .then(response => {
            setData(response.data)
            setLoading(false)
        });
    }


    const handleSubmit = (data: any) => {
        setLoading(true)
        api
        .post(`/short`,{
            "origUrl": data
        })
        .then(response => {
            console.log('response', response)
            getData()
        })
        .catch(error => {
            toast.error(error.response.data.msg, {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log('error', error.response.data)
        });
    }

    return (
        <HomeContainer>
            <ToastContainer autoClose={8000} />
            <GlobalArea>
                <RowHome>
                    <ContainerInput>
                        <BoxDefault title="Shorten URL">
                            <InputSearch handleSubmit={handleSubmit} />
                        </BoxDefault>
                    </ContainerInput>
                    <ContainerChart>
                        <BoxDefault title="URLs Shortened" hasHelper={true}>
                            <LeftContainer>
                                <CircularChart value={50}></CircularChart>
                            </LeftContainer>
                            <RightContainer>
                                <NumberChart value="7" total="10"></NumberChart>
                            </RightContainer>
                        </BoxDefault>
                    </ContainerChart>
                    <ContainerTexts>
                        <BoxDefault>
                            <SpanText>
                                This is a mock app for an exercise
                            </SpanText>
                        </BoxDefault>
                        <Space />
                        <BoxDefault>
                            <SpanText>
                                It won’t be used in production
                            </SpanText>
                        </BoxDefault>
                    </ContainerTexts>
                </RowHome>
                <RowHome>
                    <SpanText>URLs Shortened</SpanText>
                </RowHome>
                <RowUrls>
                    {
                        data.map((value: any) => {
                            return(
                                <BoxUrl key={value.urlId} urlId={value.urlId} origUrl={value.origUrl}/>
                            )
                        })
                    }
                </RowUrls>
            </GlobalArea>
        </HomeContainer>
    )
}

export default Home