import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
};

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
};

export const Container = styled.form`
  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--titles);
    margin-bottom: 3.2rem;
  }

  input {
    width: 100%;
    padding: 2rem 2.4rem;
    height: 6.4rem;
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    background: var(--background);

    ::placeholder {
      color: var(--texts);
      font-size: 1.6rem;
    }

    & + input {
      margin-top: 1.6rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    margin-top: 2.4rem;
    border: none;
    border-radius: 0.5rem;
    padding: 2rem;
    background: var(--green);

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--shape-principal);
    font-weight: 600;
    font-size: 1.6rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1.6rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  width: 100%;
  height: 6.4rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: ${({ isActive, activeColor }) => isActive 
    ? transparentize(0.9, colors[activeColor])
    : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  color: var(--titles);

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')};
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.6rem;
  }
`;