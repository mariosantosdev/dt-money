import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import { SearchFormContainer } from "./styles";

export const SearchForm: React.FC = () => (
  <SearchFormContainer>
    <input type="text" placeholder="Busque por transações" />

    <button>
      <MagnifyingGlass size={20} />
      Buscar
    </button>
  </SearchFormContainer>
);
