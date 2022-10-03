import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import SearchButton from '../SearchButton';
import { InputContainer, InputText } from './styles';

type LayoutPros = {
    handleSubmit: any
}

const InputSearch: React.FC<LayoutPros> = ({handleSubmit}) => {

    const formRef = useRef<FormHandles>(null);
    const [searchValue, setSearchValue] = useState("");

    const handleForm = () => {
        handleSubmit(searchValue)
    }
    return (
        <InputContainer>
            <Form ref={formRef} onSubmit={handleForm}>
                <InputText placeholder='Type a URL to shorten....' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} name='shortenUrl' />
                <SearchButton title={'Shorten'}/>
            </Form>
        </InputContainer>
    )

};


export default InputSearch;