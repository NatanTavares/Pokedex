import React from 'react'
import { ProgressBar, StatsScreen, CardPokemon, StatsArea, Stat, ImagePokemon, TypePokemon } from './styles'

export default function PokemonStats() {
  return (
    <StatsScreen>
      <CardPokemon>
        <ImagePokemon 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="Nome do pokemon"
          width={90}
        />
        
        <h3>Nome</h3>
        <TypePokemon>Type</TypePokemon>
        <TypePokemon>Type</TypePokemon>
      </CardPokemon>

      <StatsArea>
        <h3>Base Stats</h3>
        <ul>
          <Stat>
            <label>HP </label>
            <ProgressBar max="300" value={168} />
          </Stat>
          <Stat>
            <label>ATK </label>
            <ProgressBar max="300" value={205} />
          </Stat>
          <Stat>
            <label>DEF </label>
            <ProgressBar max="300" value={64} />
          </Stat>
          <Stat>
            <label>SPD </label>
            <ProgressBar max="300" value={204} />
          </Stat>
          <Stat>
            <label>EXP </label>
            <ProgressBar max="300" value={295} />
          </Stat>
        </ul>
      </StatsArea>
    </StatsScreen>
  )
}
