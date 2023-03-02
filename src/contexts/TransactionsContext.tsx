import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

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
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

const TransactionContext = createContext({} as TransactionsContextData);

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query = "") {
    const { data } = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
