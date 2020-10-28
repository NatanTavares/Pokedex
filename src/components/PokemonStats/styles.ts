import styled from 'styled-components';

export const StatsScreen = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 30vw;
  height: 82vh;
  padding: 1%;

  border-top-right-radius: 20px;
  background-color: rgba(0, 0, 0, .8);
  color: #fff;
`;

export const IconZone = styled.section`
  position: absolute;
  top: 1.5%;
  left: 2%;
`;

export const CardPokemon = styled.div`
  padding: 8%;
  margin: 6%;
  
  border-radius: 20px;

  background-color: orange;
  text-align: center;
`;

export const ImagePokemon = styled.img`
  max-height: 100px;
`;

export const TypePokemon = styled.p`
  width: 50%;
  margin: 4% auto 0;
  padding: 1%;

  color: #222;
  background-color: #FFF;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: bold;
`;

export const StatsArea = styled.div`
  margin-bottom: 4%;
  text-align: center;
`;

export const Stat = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  margin: 3%;
`;

export const ProgressBar = styled.progress`
  -webkit-appearance: none;
  max-width: 80%;
  min-width: 60%;
  height: 10px;

  &::-webkit-progress-bar {
    border-radius: 5px;
    background-color: ${props => props.theme.colors.secondary};
  }

  &::-webkit-progress-value {
    border-radius: 5px;
    background-color: ${props => props.theme.colors.primary};
  }

  &::-moz-progress-bar {
    border-radius: 5px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

