import styled from 'styled-components';

import LogoFullImg from '../../assets/logoFull.png';

export const FooterContainer = styled.div`
    display: flex;
    flex: 1;
    height: 329px;
    background: #1A1C29;
    border: 1px solid #36394F;
    backdrop-filter: blur(30px);
    margin-top:300px;
    justify-content: center;
`

export const FooterArea = styled.div`
    width: 100%;
    max-width: 1350px;
    display:flex;
    justify-content: flex-start;
    flex-direction: row;
    justify-content:space-between;
    padding-top: 80px;
    box-sizing: border-box;
`

export const LeftArea = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
`

export const CenterArea = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    box-sizing: border-box;
`

export const RightArea = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    box-sizing: border-box;
`

export const LogoFull = styled.div`
    width: 166px;
    height: 29px;
    background: url(${LogoFullImg});
`

export const SpanText = styled.div`
    margin-top: 22px;
    color: #FFFFFF;
    opacity: 0.5;
    margin-top: 22px;
    font-family: 'Rajdhani', sans-serif;
`

export const TitleText = styled.div`
    color: #FFFFFF;
    font-family: 'Rajdhani', sans-serif;
    font-size: 18px;
    font-weight: bold;
`

export const LinksFooter = styled.div`
    width: 100%;
    display: flex;
`

export const HalfFooter = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    div{
        opacity: 0.5;
        margin-top: 22px;
        font-family: 'Rajdhani', sans-serif;
    }
`

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    margin-top: 16px;
`