import styled from 'styled-components';

export const CardsArea = styled.ul`
  margin: 0 auto;
  max-width: 1360px;
  padding: 82px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardsAreaBackground = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  width: auto;

  background-color: ${props => props.theme.colors.areaCard};
  box-shadow: 0px 25px 65px rgba(0, 0, 0, 0.15);
`;