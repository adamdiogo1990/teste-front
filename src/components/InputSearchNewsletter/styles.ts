import styled from 'styled-components';

import ButtonSendImg from '../../assets/buttonSend.png';

export const InputContainer = styled.div`
    width: 100%;
    height: 55px;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    display:flex;
    background: rgba(54, 57, 79, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.15);
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
    font-size: 13px;
`

export const ButtonSend = styled.input`
    width: 38px;
    height: 38px;
    cursor: pointer;
    background: url(${ButtonSendImg});
`