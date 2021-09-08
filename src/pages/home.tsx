import { Grid } from "../components/Grid";
import { Header } from "../components/Header";
import { useRouting } from "../hooks/useRouting";
import { Pagination } from "../components/Pagination";

import { Container } from "../styles/home";

export function Home() {
  const { currentPage, registerPerPage, totalCountOfRegisters } = useRouting();

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
