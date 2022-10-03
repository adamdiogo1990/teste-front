import styled from 'styled-components';

import BoxDefaultImg from '../../assets/boxDefault.png';
import HelperIMG from '../../assets/helper.png';

export const Box = styled.div`
    width: 100%;
    height: 100%;
    background: url(${BoxDefaultImg});
    background-size: auto;
    background-repeat: no-repeat;
    display: flex;
    flex: 1;
    flex-direction: column;
    background-size: 100% 100%;
}
`

export const TitleContainer = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(123, 245, 251, 0.21);
    padding-left: 57px;
    padding-top: 25px;
    padding-bottom: 25px;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Rajdhani', sans-serif;
`

export const ContentBox = styled.div`
    display: flex;
    padding-left: 22px;
    padding-right: 22px;
`

export const Helper = styled.div`
    width: 19px;
    height: 19px;
    background: url(${HelperIMG});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 38px;
}
`