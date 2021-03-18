import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;

`;

export const Card = styled.div`
  padding: 2.5rem 1.8rem 1.8rem  3.2rem;
  border-radius: 0.5rem;
  background: var(--shape-principal);

  margin-top: -11rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.6rem;
      color: var(--titles);
    }

    img {
      width: 3.2rem;
    }
  }

  strong {
    display: block;
    margin-top: 1.4rem;
    font-size: 3.6rem;
    color: var(--titles);
    font-weight: 400;

    span {
      font-weight: 500;
    }
  }

  &.hightlight-background {
    background: var(--green);
    
    p, strong {
      color: var(--shape-principal);
    } 
  }
`;