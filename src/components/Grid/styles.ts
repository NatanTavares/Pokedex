import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  max-width: 1300px;
  margin: 2rem auto;
  padding: 0 2vw;

  overflow: auto;
`;

export { Container };
