import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export const Header: React.FC = () => (
  <HeaderContainer>
    <HeaderContent>
      <img src="/logo.svg" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>

        <NewTransactionModal />
      </Dialog.Root>
    </HeaderContent>
  </HeaderContainer>
);
