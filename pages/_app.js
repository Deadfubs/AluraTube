import { CSSReset } from "../src/components/CSSReset";
import { ThemeProvider } from "styled-components";

// Definições globais
export default function MyApp({ Component, pageProps }) {
  const theme = {
    light: {
      backgroundBase: "#f9f9f9",
      backgroundLevel1: "#ffffff",
      backgroundLevel2: "#f0f0f0",
      borderBase: "#e5e5e5",
      textColorBase: "#222222",
    },
    dark: {
      backgroundBase: "#181818",
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838",
      textColorBase: "#FFFFFF",
    },
  };
  return (
    <ThemeProvider theme={theme.dark}>
      <CSSReset />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
