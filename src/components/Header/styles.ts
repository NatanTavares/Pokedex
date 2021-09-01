import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => `
    padding: ${theme.scales.padding.lg};
    border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
    
    color: ${theme.palette.primary.contrast};
    background: ${theme.palette.primary.main};
    box-shadow: 0 0 10px 10px ${theme.palette.shadow};
  `};
`;

export { Container };
