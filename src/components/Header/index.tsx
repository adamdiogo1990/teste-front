import React from 'react';
import Banner from '../Banner';
import { Area, ContainerSocial, HeaderContainer, LeftLine, LineBottom, Logo, Medium, RightLine, Telegram, Twitter } from './styles';

const Header: React.FC = () => (
    <>
        <HeaderContainer>
            <Area>
                <Logo />
                <ContainerSocial>
                    <Twitter />
                    <Telegram />
                    <Medium />
                </ContainerSocial>
            </Area>
        </HeaderContainer>
        <LineBottom>
            <LeftLine />
            <RightLine />
        </LineBottom>
        <Banner />
    </> 
  );
  
  
  export default Header;