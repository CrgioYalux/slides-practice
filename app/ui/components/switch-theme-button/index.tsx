"use client";

import { useTheme } from "@/app/lib/providers/theme";
import Sun from "../icons/sun";
import Moon from "../icons/moon";

interface SwitchThemeButtonProps {
  classNames?: ClassNames<["button", "icon"]>;
}

const defaultClassNames = () => ({
  button: `text-black dark:text-white`,
  icon: `w-6 h-6`,
});

export default function SwitchThemeButton({
  classNames
}: SwitchThemeButtonProps): JSX.Element {
  const [theme, switchTheme] = useTheme();

  const buttonClassName = classNames?.overwriteButton ?? `${defaultClassNames().button} ${classNames?.button ?? ''}`;
  const iconClassName = classNames?.overwriteIcon ?? `${defaultClassNames().icon} ${classNames?.icon ?? ''}`;

  return (
    <button 
    onClick={(event) => {
      event.preventDefault();
      switchTheme();
    }}
    className={buttonClassName}
    >
      {theme.current === "dark" 
      ? <Sun className={iconClassName} /> 
      : <Moon className={iconClassName} />}
    </button>
  );
}
