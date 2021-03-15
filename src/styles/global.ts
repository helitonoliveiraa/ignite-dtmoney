import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E52E4D;
    --shape-principal: #FFFFFF;
    --titles: #363F5F;
    --texts: #969CB2;
    --background: #F0F2F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem to equal 10px */

    @media (max-width: 1080px) {
      font-size: 56.25%; /* 1rem to equal 9px */
    }

    @media (max-width: 720px) {
      font-size: 50%; /* 1rem to equal 8px */
    }
  }

  body {
    background: var(--background);
    --webkit-font-smooth: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;