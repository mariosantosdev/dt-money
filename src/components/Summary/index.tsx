import { currencyFormatter } from '../../utils/formatter'
import React from 'react'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { useTransactions } from '../../contexts/TransactionsContext'
import { useSummary } from '../../hooks/useSummary'

export const Summary: React.FC = () => {
  const transactions = useTransactions((selector) => selector.transactions)
  const { income, outcome, total } = useSummary(transactions)

  return (
    <SummaryContainer>
      <SummaryCard variant="income">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>{currencyFormatter(income)}</strong>
      </SummaryCard>

      <SummaryCard variant="outcome">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>{currencyFormatter(outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="total">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>{currencyFormatter(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
