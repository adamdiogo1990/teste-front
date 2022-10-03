import React from 'react';
import { GlobalArea } from '../../styles/global';
import { BannerContainer, BigText, ContainerText, SmallText } from './styles';

const Banner: React.FC = () => (
    <BannerContainer>
      <GlobalArea>
        <ContainerText>
          <SmallText>
            Welcome
          </SmallText>
          <BigText>
            To Our URL Shortener
          </BigText>
        </ContainerText>
      </GlobalArea>
    </BannerContainer>    
);
  
  
  export default Banner;