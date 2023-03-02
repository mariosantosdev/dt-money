import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Transactions } from "../../components/Transactions";

export function TransactionsPage() {
  return (
    <div>
      <Header />
      <Summary />

      <Transactions />
    </div>
  );
}
