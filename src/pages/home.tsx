import { useEffect } from "react";

import { Grid } from "../components/Grid";
import { Header } from "../components/Header";
import { useRouting } from "../hooks/useRouting";
import { Pagination } from "../components/Pagination";

import { Container } from "../styles/home";
import { usePokemon } from "../hooks/usePokemon";

export function Home() {
  const { currentPage, registerPerPage, totalCountOfRegisters } = useRouting();
  const { fetchPokemonsPage, loading } = usePokemon();

  useEffect(() => {
    fetchPokemonsPage(currentPage);
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Header />
      {!loading && (
        <>
          <Grid />
          <Pagination
            totalCountOfRegisters={totalCountOfRegisters}
            registerPerPage={registerPerPage}
            currentPage={currentPage}
          />
        </>
      )}
    </Container>
  );
}
