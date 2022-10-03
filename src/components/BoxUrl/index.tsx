import ButtonDefault from "../ButtonDefault"
import { Box, Chain, ContainerLink, LinkHref, SpanText, RightBox, Hamburguer } from "./styles"

type LayoutPros = {
    urlId?: string,
    origUrl?: string
}

const BoxUrl: React.FC<LayoutPros> = ({urlId, origUrl}) => {

    return(
        <Box>
           <LinkHref>
                http://localhost:3000/{urlId}
           </LinkHref>
           <ContainerLink>
                <Chain></Chain>
                <SpanText>
                    Full Link: {origUrl}
                </SpanText> 
           </ContainerLink>
           <RightBox>
                <ButtonDefault value={urlId} title={'Copy'}></ButtonDefault>
                <Hamburguer></Hamburguer>
           </RightBox>
        </Box>
    )
}

export default BoxUrl