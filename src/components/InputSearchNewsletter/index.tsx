import React from 'react';
import SearchButton from '../SearchButton';
import { ButtonSend, InputContainer, InputText } from './styles';


const InputSearchNewsletter: React.FC = () => {

    return (
        <InputContainer>
            <InputText placeholder='Enter your email address'  />
            <ButtonSend />
        </InputContainer>
    )

};


export default InputSearchNewsletter;