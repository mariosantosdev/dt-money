import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useTransactions } from "../../contexts/TransactionsContext";

const transactionSchema = z.object({
  description: z.string().min(2),
  value: z.number(),
  category: z.string().min(2),
  type: z.enum(["income", "outcome"]),
});

type TransactionFormProps = z.infer<typeof transactionSchema>;

export const NewTransactionModal: React.FC = () => {
  const { createTransaction } = useTransactions();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<TransactionFormProps>({
    resolver: zodResolver(transactionSchema),
  });

  const handleCreateTransaction: SubmitHandler<TransactionFormProps> = async (
    data
  ) => {
    await createTransaction(data);

    reset();
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Valor"
            {...register("value", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType onValueChange={field.onChange}>
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>

                <TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
