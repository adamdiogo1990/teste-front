import React from 'react';
import Background from '../Background';
import Footer from '../Footer';
import Header from '../Header';
import { Container, ContentLayout } from './styles';

type LayoutPros = {
    children: React.Component | any
}

const ContainerLayout: React.FC<LayoutPros> = ({children}) => (
  <>
    <Background />
    <ContentLayout>
        <Container>
            <Header />
            <>
              {children}
            </>
            <Footer />
        </Container>
    </ContentLayout>
  </>
);


export default ContainerLayout;
