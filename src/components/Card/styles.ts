import styled from 'styled-components';

export const CardTemplate = styled.li`
  display: flex;
  justify-content: center;
  
  background-color: ${props => props.theme.colors.card};
  width: 163px;
  height: 137px;
  border-radius: 20px;

  margin: 23px 18px;
  cursor: pointer;

  :hover {
    transition: 300ms;
    box-shadow: ${props => props.theme.colors.boxShadow};
  }
`;

export const LinkOnCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  text-decoration: none;
`;

export const ImagePokemon = styled.img`
  max-height: 100px;
`;

export const TitleCard = styled.h2`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  font-style: normal;

  color: #fff;
`;