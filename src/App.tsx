import { Pagination } from "./components/Pagination";
import { Header } from "./components/Header";
import { Grid } from "./components/Grid";

import { Container } from "./styles/home";

function App() {
  return (
    <Container>
      <Header />
      <Grid />
      <Pagination
        totalCountOfRegisters={50}
        currentPage={3}
        onPageChange={() => {}}
      />
    </Container>
  );
}

export default App;
