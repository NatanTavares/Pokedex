import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 97.8%;
  height: 82px;
  margin: 0 1.1%;
  padding: 0 4%;

  border-radius: 0 0 20px 20px;
  box-shadow: 0 25px 65px rgba(0, 0, 0, .15);

  background-color: ${props => props.theme.colors.primary};
  position: fixed;
`;

export const WrapMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  list-style-type: none;
`;

export const ItemMenu = styled.span`
  color: ${props => props.theme.colors.text};
  cursor: pointer;
`;
