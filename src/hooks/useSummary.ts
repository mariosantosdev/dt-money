import { Transaction } from '../contexts/TransactionsContext'

export const useSummary = (transactions: Transaction[]) => {
  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.value
        acc.total += transaction.value
      } else {
        acc.outcome += transaction.value
        acc.total -= transaction.value
      }

      return acc
    },
    { income: 0, outcome: 0, total: 0 },
  )
}
