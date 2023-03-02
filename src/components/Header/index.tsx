import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export const Header: React.FC = () => (
  <HeaderContainer>
    <HeaderContent>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src="/logo.svg" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>

        <NewTransactionModal />
      </Dialog.Root>
    </HeaderContent>
  </HeaderContainer>
)
