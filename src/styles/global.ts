import styled, { createGlobalStyle } from 'styled-components';

export const GlobalArea = styled.div`
    width: 100%;
    max-width: 1350px;
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
`


export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    background: #1E1E1E;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto-slab', serif;
    font-size: 16px;
  }rsor: pointer;
  }
`;