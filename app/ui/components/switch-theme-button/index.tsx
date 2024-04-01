"use client";

import { useTheme } from "@/app/lib/providers/theme";
import Sun from "../icons/sun";
import Moon from "../icons/moon";

interface SwitchThemeButtonProps {
  className?: string;
}

export default function SwitchThemeButton({ className = "" }: SwitchThemeButtonProps): JSX.Element {
  const [theme, switchTheme] = useTheme();

  return (
    <button 
    onClick={switchTheme}
    className={`text-black dark:text-white ${className}`}
    >
      {theme.current === "dark" 
      ? <Sun className="w-6 h-6" /> 
      : <Moon className="w-6 h-6" />}
    </button>
  );
}
