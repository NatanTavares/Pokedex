import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;

  padding-bottom: 2rem;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    margin: 0 0.125rem;

    border-radius: 0.25rem;
    border: 2px solid #dfe3e8;

    font-size: 0.875rem;
    font-weight: bolder;

    transition: filter 0.2s;

    &:disabled {
      border: 2px solid ${({ theme }) => theme.palette.disabled.bg};

      background: ${({ theme }) => theme.palette.disabled.bg};
      color: ${({ theme }) => theme.palette.disabled.contrast};

      &:hover {
        cursor: not-allowed;
        filter: brightness(1);
      }
    }

    &.isCurrent {
      color: ${({ theme }) => theme.palette.primary.main};
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export { Container };
