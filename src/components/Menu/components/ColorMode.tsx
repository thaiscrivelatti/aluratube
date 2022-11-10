import { createContext, ProviderProps, useState } from "react";


interface ColorModeContextInterface {
  mode: string,
  setMode: any,
  toggleMode: any
}

const colorContext: ColorModeContextInterface = {
  mode: "dark",
  setMode: () => {},
  toggleMode: () => {}
}

export const ColorModeContext = createContext<ColorModeContextInterface>(colorContext);

export default function ColorModeProvider(props: any) {
  const [mode, setMode] = useState(props.initialMode); 
  function toggleMode() {
    if (mode==="dark") setMode("light");
    if (mode==="light") setMode("dark");
  } 
  return (
    <ColorModeContext.Provider value={colorContext}>
        <div>{props.children}</div>
    </ColorModeContext.Provider>
  );
}
