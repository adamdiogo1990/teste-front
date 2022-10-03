import styled from 'styled-components';

import BannerImg from '../../assets/banner.png';
import BoxImg from '../../assets/boxText.png';

export const BannerContainer = styled.div`
    width: 100%;
    height: 315px;
    background: url(${BannerImg});
    background-size: cover;
    background-repeat: no-repeat;
    top: -5px;
    position: relative;
    z-index: 2;
    display:flex;
    justify-content: center;
`

export const ContainerText = styled.div`
    width: 301px;
    height: 84px;
    margin-top: 60px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(21px);
    border-radius: 6px;
    padding: 15px;
    box-sizing: border-box;
    font-family: 'Rajdhani', sans-serif;
    background: url(${BoxImg});
    background-size: cover;
    background-repeat: no-repeat;
`

export const SmallText = styled.div`
    font-size: 12px;
`

export const BigText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
}
`