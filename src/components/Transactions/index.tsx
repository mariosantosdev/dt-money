import { useTransactions } from "../../contexts/TransactionsContext";
import { SearchForm } from "../SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export const Transactions: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <TransactionsContainer>
      <SearchForm />

      <TransactionsTable>
        <tbody>
          {transactions.map((transaction) => (
            <tr>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === "outcome" && "- "}
                  {Intl.NumberFormat("pt-br", {
                    currency: "brl",
                    style: "currency",
                  }).format(transaction.value)}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>
                {Intl.DateTimeFormat("pt-br").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  );
};
