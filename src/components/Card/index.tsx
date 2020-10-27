import React from 'react';

interface CardProps {
  name: string;
  url: string;
  pathImage: string;
}

export default function Card({ name, pathImage, url}: CardProps) {  
  return (
    <li key={name}>
      <img src={pathImage} alt={`${name}`} />
      <h2>{name}</h2>
    </li>
  );
}