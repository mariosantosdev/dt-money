import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

export const NewTransactionModal: React.FC = () => (
  <Dialog.Portal>
    <Overlay />
    <Content>
      <Dialog.Title>Nova Transação</Dialog.Title>
      <CloseButton>
        <X size={24} />
      </CloseButton>

      <form action="">
        <input type="text" placeholder="Descrição" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />

        <TransactionType>
          <TransactionTypeButton variant="income" value="income">
            <ArrowCircleUp size={24} />
            Entrada
          </TransactionTypeButton>

          <TransactionTypeButton variant="outcome" value="outcome">
            <ArrowCircleDown size={24} />
            Saída
          </TransactionTypeButton>
        </TransactionType>

        <button type="submit">Cadastrar</button>
      </form>
    </Content>
  </Dialog.Portal>
);
