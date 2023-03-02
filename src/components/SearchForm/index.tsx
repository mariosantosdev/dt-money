import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer } from './styles'
import { useTransactions } from '../../contexts/TransactionsContext'

const searchSchema = z.object({
  query: z.string(),
})

type SearchFormProps = z.infer<typeof searchSchema>

export const SearchForm: React.FC = () => {
  const fetchTransactions = useTransactions(
    (selector) => selector.fetchTransactions,
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormProps>({
    resolver: zodResolver(searchSchema),
  })

  const handleSearchTransactions: SubmitHandler<SearchFormProps> = async ({
    query,
  }) => {
    await fetchTransactions(query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
