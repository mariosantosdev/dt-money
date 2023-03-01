import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    cursor: pointer;

    border: 0;
    border-radius: 6px;
    padding: 1rem;
    background-color: transparent;
    color: ${({ theme }) => theme["green-300"]};
    border: 1px solid ${({ theme }) => theme["green-300"]};
    font-weight: bolder;

    transition: background-color 0.2s, color 0.2s, border 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["white"]};
      border: 1px solid ${({ theme }) => theme["green-500"]};
    }
  }
`;
