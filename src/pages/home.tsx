import { useEffect } from "react";

import { Grid } from "../components/Grid";
import { Header } from "../components/Header";
import { useRouting } from "../hooks/useRouting";
import { Pagination } from "../components/Pagination";

import { Container } from "../styles/home";
import { usePokemon } from "../hooks/usePokemon";

export function Home() {
  const { currentPage, registerPerPage, totalCountOfRegisters } = useRouting();
  const { fetchPokemonsPage } = usePokemon();

  useEffect(() => {
    fetchPokemonsPage(currentPage);
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Header />
      <Grid />
      <Pagination
        totalCountOfRegisters={totalCountOfRegisters}
        registerPerPage={registerPerPage}
        currentPage={currentPage}
      />
    </Container>
  );
}
