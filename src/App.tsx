import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Vegetables } from "./pages/Vegetables/Vegetables";
import "./App.scss";

export const App = () => {
  return (
    <MantineProvider>
      <Vegetables />
    </MantineProvider>
  );
};
