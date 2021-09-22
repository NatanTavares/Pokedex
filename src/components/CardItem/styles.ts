import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  width: 10rem;
  height: 8.5rem;

  cursor: pointer;
  transition: filter 0.2s;
  text-transform: capitalize;

  ${({ theme }) => `
    padding: ${theme.scales.padding.lg};

    border-radius: ${theme.borderRadius};
    box-shadow: 0 0 6px 2px ${theme.palette.shadow};
    background: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrast};
  `}

  &:hover {
    filter: brightness(0.9);
  }

  img {
    max-width: 7.5rem;
    max-height: 5.5rem;
  }

  h1 {
    font-size: 1rem;
  }
`;

export { Container };
