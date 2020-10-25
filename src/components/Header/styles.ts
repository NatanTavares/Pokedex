import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 82px;
  padding: 0 30px;

  border-radius: 0 0 20px 20px;
  box-shadow: 0 25px 65px rgba(0, 0, 0, .15);

  background-color: ${props => props.theme.colors.primary};
`;

export const WrapMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  list-style-type: none;
`;

export const ItemMenu = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`;
