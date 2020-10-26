import React from 'react';

interface CardProps {
  pokemon: {
    id: number;
    name: string;
  };
}

export default function Card({ pokemon }: CardProps) {  
  return (
    <li key={pokemon.id}>
      <img src="https:///" alt={`image: ${pokemon.name}`} />
      <h2>{pokemon.name}</h2>
    </li>
  );
}