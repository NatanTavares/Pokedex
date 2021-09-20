import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 6vw;

  max-width: 1300px;
  width: 100%;
  margin: 5rem auto;
  padding: 0 1rem;
`;

export { Container, Section };
