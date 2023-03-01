import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export const Header: React.FC = () => (
  <HeaderContainer>
    <HeaderContent>
      <img src="/logo.svg" />

      <NewTransactionButton>Nova transação</NewTransactionButton>
    </HeaderContent>
  </HeaderContainer>
);
