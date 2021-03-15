import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6.4rem;

  table {
    width: 100%;
    border-spacing: 0 0.8rem;

    th {
      color: var(--texts);
      font-size: 1.6rem;
      font-weight: 400;
      text-align: left;
      padding: 2rem 3.2rem;
    }

    td {
      background: var(--shape-principal);
      padding: 2rem 3.2rem;
      border: 0;
      font-size: 1.6rem;
      color: var(--texts);

      &:first-child {
        color: var(--titles);
        border-radius: 0.5rem 0 0 0.5rem;
          border-left: 2px solid var(--blue);
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }

      &.outcome {
        color: var(--red);
      }

      &.income {
        color: var(--green);
      }
    }
  }
`;