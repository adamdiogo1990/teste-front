import { Box, ContentBox, Helper, TitleContainer } from "./styles"

type LayoutPros = {
    children: React.Component | any,
    title?: string,
    hasHelper?: boolean
}

const BoxDefault: React.FC<LayoutPros> = ({children, title, hasHelper}) => {
    return(
        <Box>
            {
                title && (
                    <TitleContainer>
                        <span>{title}</span>
                        {hasHelper && (
                            <Helper></Helper>
                        )}
                    </TitleContainer>
                )
            }
            <ContentBox>
                {children}
            </ContentBox>
        </Box>
    )
}

export default BoxDefault