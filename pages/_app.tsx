import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CSSReset } from "../src/components/CSSReset";
import { ThemeProvider } from "styled-components";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import { Provider, ProviderProps, useContext } from "react";
import { ObjectType } from "typescript";

const theme: any = {
  "light": {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  "dark": {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

function ProviderWrapper(props: any) {
  return (
    <ColorModeProvider initialMode={"dark"}>
      {props.children}
    </ColorModeProvider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const context = useContext(ColorModeContext);
  console.log("myapp",theme[context.mode]);
  return (
    <ColorModeProvider initialMode={context?.mode}>
      <ThemeProvider theme={theme[context.mode]}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeProvider>
  );
}

export default function _App(props: AppProps) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  )
}

/**
 * About Providers: it's better to have a provider for each situation
 * than trying to resolve all the situations with only one provider.
 *
 */
