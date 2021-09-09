import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 25rem;
  height: 28.75rem;
  padding: 2rem;

  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 0 10px 4px ${({ theme }) => theme.palette.shadow};

  background: #f8a060;

  img {
    max-width: 15.625rem;
    max-height: 12.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    width: 100%;
    height: 12.5rem;

    h1 {
      font-size: 1.875rem;
      color: white;
    }
  }
`;

const Types = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  margin: auto;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 15.625rem;
    height: 2rem;

    border-radius: ${({ theme }) => theme.borderRadius};

    font-size: 1.25rem;
    background: white;
  }
`;

export { Container, Types };
