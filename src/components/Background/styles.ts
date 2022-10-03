import styled from 'styled-components';

import LeftBackground from '../../assets/left.png';
import RightBackground from '../../assets/right.png';

export const ContainerBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
`

export const Left = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left:0px;
    bottom:0px;
    opacity: 0.7;
    background: url(${LeftBackground});
    background-position: left;
    background-repeat: no-repeat;
}
`

export const Right = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    right:0px;
    bottom:0px;
    opacity: 0.7;
    background: url(${RightBackground});
    background-position: right;
    background-repeat: no-repeat;
}
`