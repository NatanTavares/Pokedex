import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 8px solid ${props => props.theme.colors.secondary};
  border-left-color: ${props => props.theme.colors.primary};

  height: 60px;
  width: 60px;

  border-radius: 50%;
  animation: ${spin} .500s linear infinite;
`;

export const PositionSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 80vw;
  height: 80vh;

  margin: auto;
`
