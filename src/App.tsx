import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { TransactionsPage } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <TransactionsPage />

        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
