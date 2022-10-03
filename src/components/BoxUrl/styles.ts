import styled from 'styled-components';

import BoxDefaultImg from '../../assets/boxURL.png';
import ChainImg from '../../assets/chain.png';
import HamburgerImg from '../../assets/hamburguer.png';

export const Box = styled.div`
    width: 100%;
    height: 109px;
    background: url(${BoxDefaultImg});
    background-size: auto;
    background-repeat: no-repeat;
    display: flex;
    flex: 1;
    flex-direction: column;
    background-size: 100% 100%;
    padding: 36px;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 10px;
}
`

export const LinkHref = styled.a`
    display: flex;
    color: #FFF;
    font-size: 22px;
    cursor: pointer;
    font-family: 'Rajdhani', sans-serif;
    align-items: center;
`

export const ContainerLink = styled.div`
    display: flex;
    color: #FFF;
    font-size: 22px;
    cursor: pointer;
    font-family: 'Rajdhani', sans-serif;
    align-items: center;
`

export const Chain = styled.div`
    width: 24px;
    height: 24px;
    background: url(${ChainImg});
    margin-right: 24px;
`

export const SpanText = styled.div`
    display: flex;
    color: #FFF;
    font-size: 15px;
    font-family: 'Rajdhani', sans-serif;
`

export const RightBox = styled.div`
    display: flex;
    font-family: 'Rajdhani', sans-serif;
`

export const Hamburguer = styled.div`
    width:30px;
    height: 32px;
    background: url(${HamburgerImg});
    margin-left: 23px;
`