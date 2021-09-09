import { createContext, ReactNode, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

type ContextType = {
  currentPage: number;
  registerPerPage: number;
  totalCountOfRegisters: number;
  buildPagingUrl: (props: buildPagingUrlProps) => string;
  onSetCurrentPage: (page: number) => void;
  onSetTotalCountOfRegister: (total: number) => void;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
};

type ProviderProps = {
  children: ReactNode;
};

type buildPagingUrlProps = {
  page: number;
  registerPerPage?: number;
};

export const RoutingContext = createContext({} as ContextType);

export function RoutingProvider({ children }: ProviderProps) {
  const [registerPerPage, setRegisterPerPage] = useState(24);
  const [totalCountOfRegisters, setTotalCountOfRegisters] = useState(0);
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("page");

    if (Number(query)) {
      return Number(query);
    } else {
      return 1;
    }
  });

  function onSetTotalCountOfRegister(total: number) {
    setTotalCountOfRegisters(total);
  }

  function onSetCurrentPage(page: number) {
    setCurrentPage(page);
  }

  function handlePreviousPage() {
    onSetCurrentPage(1 - currentPage);
  }

  function handleNextPage() {
    onSetCurrentPage(currentPage + 1);
  }

  function buildPagingUrl({ page, registerPerPage = 24 }: buildPagingUrlProps) {
    setRegisterPerPage(registerPerPage);
    const offset = page === 1 ? 0 : registerPerPage * (page - 1);
    return `?offset=${offset}&limit=${registerPerPage}`;
  }

  return (
    <RoutingContext.Provider
      value={{
        buildPagingUrl,
        currentPage,
        handleNextPage,
        handlePreviousPage,
        onSetCurrentPage,
        registerPerPage,
        totalCountOfRegisters,
        onSetTotalCountOfRegister,
      }}
    >
      <Router>{children}</Router>
    </RoutingContext.Provider>
  );
}
