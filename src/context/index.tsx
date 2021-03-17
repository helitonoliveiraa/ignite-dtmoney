import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import { formatValue, formatDate } from '../utils/format';


type Transaction = {
  id: number;
  type: string;
  title: string;
  amount: number;
  amountFormatted: number;
  category: string;
  createdAt: string;
  dateFormatted: Date;
};

type TrasactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

type TransactionProviderProps = {
  children: ReactNode;
};

type TransactionsContextDate = {
  transactions: Transaction[];
  createTransaction: (transaction: TrasactionInput) => void;
};

export const TransactionsContext = createContext<TransactionsContextDate>(
  {} as TransactionsContextDate
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get(`/transactions`)
      .then(response => {
        const formattedTransactions = response.data.transactions.map((transaction: Transaction) => {
          return {
            ...transaction,
            amountFormatted: formatValue(transaction.amount),
            dateFormatted: formatDate(new Date(transaction.createdAt)),
          }
        })

        setTransactions(formattedTransactions)
      })  
  }, []);

  async function createTransaction(transaction: TrasactionInput) {

    const response = await api.post('/transactions', transaction);

    const transactionData = response.data.transaction;
    
    const data = {
      ...transactionData,
      amountFormatted: formatValue(transactionData.amount),
      dateFormatted: formatDate(new Date(transactionData.createdAt)),
    };
    
    setTransactions([...transactions, data]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}