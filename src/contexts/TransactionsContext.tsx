import React, { createContext, useContext, useEffect, useState } from "react";

export type Transaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  value: number;
  category: string;
  createdAt: string;
};

interface TransactionsContextData {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

const TransactionContext = createContext({} as TransactionsContextData);

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
