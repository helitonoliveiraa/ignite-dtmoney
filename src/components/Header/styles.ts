import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 21.2rem;

  
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3.2rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    max-width: 17.28rem;
  }

  button {
    border: 0;
    border-radius: 0.5rem;
    padding: 1.2rem 3.2rem;

    font-size: 1.6rem;
    font-weight: 600;
    color: var(--shape-principal);
    background: var(--blue-light);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;