import styled from "styled-components";

const Container = styled.table`
  flex: 1;
  height: 23rem;

  color: ${({ theme }) => theme.palette.contrast};

  caption {
    font-size: 1.5rem;
    margin-bottom: 1.125rem;
  }
`;

const Label = styled.td`
  width: 2.875rem;
  padding-right: 2rem;

  color: ${({ theme }) => theme.palette.contrast};
  font-weight: bold;
  font-size: 1.25rem;
`;

export { Container, Label };
