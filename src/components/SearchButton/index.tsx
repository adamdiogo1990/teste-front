import React from 'react';
import { Button } from './styles';

type LayoutPros = {
    title: any
}

const SearchButton: React.FC<LayoutPros> = ({title}) => (
    <Button type='submit'>
        {title}
    </Button>
)


export default SearchButton;