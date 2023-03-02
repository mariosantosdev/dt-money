import styled, { css } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as Radio from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const CloseButton = styled(Dialog.Close)`
  cursor: pointer;
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme["gray-900"]};
      color: ${({ theme }) => theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme["gray-500"]};
      }
    }

    button[type="submit"] {
      cursor: pointer;
      height: 58px;
      border: 0;
      background-color: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["white"]};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;

      transition: background-color 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme["green-700"]};
      }
    }
  }
`;

export const TransactionType = styled(Radio.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 0.5rem;
`;

type TransactionTypeButtonProps = {
  variant: "income" | "outcome";
};

export const TransactionTypeButton = styled(
  Radio.Item
)<TransactionTypeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;

  color: ${({ theme }) => theme["gray-300"]};
  background-color: ${({ theme }) => theme["gray-700"]};

  svg {
    color: ${({ theme, variant }) =>
      variant === "income" ? theme["green-300"] : theme["red-300"]};
  }

  ${({ variant, theme }) =>
    variant === "outcome" &&
    css`
      :focus {
        box-shadow: 0 0 0 2px ${theme["red-500"]};
      }
    `}

  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme["gray-600"]};
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme["white"]};
    background-color: ${({ theme, variant }) =>
      variant === "income" ? theme["green-500"] : theme["red-500"]};

    svg {
      color: ${({ theme }) => theme["white"]};
    }
  }
`;
