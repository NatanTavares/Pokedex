import { PaginationItem } from "./paginationItem";

import { Container } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: Props) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Container>
      <PaginationItem
        disabled={currentPage === 1}
        onPageChange={onPageChange}
        Icon={IoIosArrowBack}
        index={currentPage - 1}
      />

      {previousPages.length > 0 &&
        previousPages.map((page) => (
          <PaginationItem onPageChange={onPageChange} key={page} index={page} />
        ))}

      <PaginationItem
        onPageChange={onPageChange}
        isCurrent
        index={currentPage}
      />

      {nextPage.length > 0 &&
        nextPage.map((page) => (
          <PaginationItem onPageChange={onPageChange} key={page} index={page} />
        ))}

      <PaginationItem
        disabled={currentPage === lastPage}
        onPageChange={onPageChange}
        Icon={IoIosArrowForward}
        index={currentPage + 1}
      />
    </Container>
  );
}
