import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import GlobalStyles from './styles/global';
import ContainerLayout from './components/ContainerLayout';

const App: React.FC = () => (
  <ContainerLayout>
    <Router>
      <Routes />
    </Router>
    <GlobalStyles />
  </ContainerLayout>

);


export default App;
