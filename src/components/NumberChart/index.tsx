import { NumberChartContainer } from "./styles"

type LayoutPros = {
    value: string,
    total: string
}

const NumberChart: React.FC<LayoutPros> = ({value, total}) => {
    return(
        <NumberChartContainer>
            {value}/{total}
        </NumberChartContainer>
    )
}

export default NumberChart