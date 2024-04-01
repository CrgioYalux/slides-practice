"use client";

import { 
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { 
  getSystemTheme,
  applyTheme,
  getSavedTheme 
} from "@/app/lib/providers/theme/helpers";

const Context = createContext<Theme.Context>({} as Theme.Context);

interface ThemeProviderProps {
  children: React.ReactNode 
}

export default function ThemeProvider({
  children 
}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme.Value>("dark");

  useEffect(() => {
    const preferredTheme = getSavedTheme() ?? getSystemTheme();
    setTheme(preferredTheme);
    applyTheme(preferredTheme);
  }, []);

  function switchTheme(): void {
    const newTheme = theme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    setTheme(newTheme);
  }

  const value: Theme.Context = [
  {
    current: theme,
     opposite: theme === "dark" ? "light" : "dark",
  },
    switchTheme
  ];

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export const useTheme = () => useContext<Theme.Context>(Context);
