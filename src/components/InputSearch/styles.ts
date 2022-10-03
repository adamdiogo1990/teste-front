import styled from 'styled-components';

import InputContainerImg from '../../assets/inputContainer.png';

export const InputContainer = styled.div`
    width: 100%;
    height: 55px;
    background: url(${InputContainerImg});
    background-size: 100% 100%;
    margin-top: 47px;
    padding: 8px;
    box-sizing: border-box;
    display:flex;

    form{
        flex: 1;
        display: flex;
    }
`

export const InputText = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    color: #FFF;
    font-family: 'Rajdhani', sans-serif;
    font-size: 18px;
`