import { useEffect } from "react";
import { usePokemon } from "../hooks/usePokemon";

import { BaseStats } from "../components/BaseStats";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

import { Container, Section } from "../styles/details";

export function Details() {
  const { fetchPokemon, pokemon, loading } = usePokemon();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("name");

    !!query && fetchPokemon(query);
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Header />

      {!loading && (
        <Section>
          <Card
            types={pokemon.types}
            url={pokemon.sprite}
            name={pokemon.name}
          />
          <BaseStats stats={pokemon.stats} />
        </Section>
      )}
    </Container>
  );
}
