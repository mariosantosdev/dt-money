import { SearchForm } from "../SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export const Transactions: React.FC = () => (
  <TransactionsContainer>
    <SearchForm />

    <TransactionsTable>
      <tbody>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>
            <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
          </td>
          <td>Venda</td>
          <td>13/04/2023</td>
        </tr>
        <tr>
          <td width="50%">Café</td>
          <td>
            <PriceHighlight variant="outcome">- R$ 3,90</PriceHighlight>
          </td>
          <td>Alimentação</td>
          <td>13/04/2023</td>
        </tr>
      </tbody>
    </TransactionsTable>
  </TransactionsContainer>
);
