import React from 'react';
import InputSearchNewsletter from '../InputSearchNewsletter';
import { CenterArea, FooterArea, FooterContainer, HalfFooter, LeftArea, LinksFooter, LogoFull, RightArea, SpanText, TitleText, ContainerInput } from './styles';

const Footer: React.FC = () => (
    
        <FooterContainer>
            <FooterArea>
                <LeftArea>
                    <LogoFull />
                    <SpanText>
                        Seedify.fund is a Blockchain Gaming focused Incubator and Launchpad. Through staking $SFUND, become eligible to buy game tokens before everyone else, and have an edge in the play to earn era!
                    </SpanText>
                </LeftArea>
                <CenterArea>
                    <TitleText>
                        Company
                    </TitleText>
                    <LinksFooter>
                        <HalfFooter>
                            <div>Seedify Home Page</div>
                            <div>About us</div>
                        </HalfFooter>
                        <HalfFooter>
                            <div>Our Blog</div>
                            <div>Contact Us</div>
                        </HalfFooter>
                    </LinksFooter>
                </CenterArea>
                <RightArea>
                    <TitleText>
                        Never Miss Updates
                    </TitleText>
                    <ContainerInput>
                        <InputSearchNewsletter />
                    </ContainerInput>
                    <TitleText>
                        Follow us on
                    </TitleText>
                </RightArea>
            </FooterArea>
        </FooterContainer>
  );
  
  
  export default Footer;