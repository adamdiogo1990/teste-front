import React from 'react';
import { Button } from './styles';

type LayoutPros = {
    title: any,
    value: any
}

const ButtonDefault: React.FC<LayoutPros> = ({ title, value }) => {

    const onClickFunction = () => {
        alert(value)
    }

    return (
        <Button onClick={onClickFunction}>
            {title}
        </Button>
    )
}


export default ButtonDefault;