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
    --border: #D7D7D7;
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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 588px;
    padding: 6.4rem 4.8rem;
    border-radius: 0.5rem;
    background: var(--shape-principal);
    position: relative;
  }

  .react-modal-close {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    border: none;
    
    font-size: 0;
    vertical-align: middle;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;