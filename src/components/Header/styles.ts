import styled from 'styled-components';

import LogoImg from '../../assets/Logo.png';
import TwitterImg from '../../assets/twitter.png';
import TelegramImg from '../../assets/telegram.png';
import MediumImg from '../../assets/medium.png';
import LeftLineImg from '../../assets/lineLeft.png';
import RightLineImg from '../../assets/lineRight.png';

export const HeaderContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    height: 110px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(21px);
`

export const Area = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    height: 110px;
    width: 100%;
    max-width: 1350px;
    align-items: center;
`

export const Logo = styled.div`
    display: flex;
    width: 113px;
    height: 32px;
    justify-content: space-between;
    background-repeat: no-repeat;
    background: url(${LogoImg});
`

export const ContainerSocial = styled.div`
    display: flex;
`

export const Twitter = styled.div`
    display: flex;
    width: 20px;
    height: 16px;
    background: url(${TwitterImg});
    margin-right:15px;
`

export const Telegram = styled.div`
    display: flex;
    width: 20px;
    height: 16px;
    background: url(${TelegramImg});
    margin-right:15px;
`

export const Medium = styled.div`
    display: flex;
    width: 20px;
    height: 16px;
    background: url(${MediumImg});
`

export const LineBottom = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    height: 4px;
    top: -3px;
    position: relative;
    z-index: 3;
`

export const LeftLine = styled.div`
    width: 186px;
    height: 4px;
    background: url(${LeftLineImg});
`

export const RightLine = styled.div`
    width: 186px;
    height: 4px;
    background: url(${RightLineImg});
`