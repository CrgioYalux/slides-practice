function getSystemTheme(): Theme.Value {
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) return "dark";
  return "light";
}

function getSavedTheme(): Theme.Value | null {
  if (typeof window === "undefined") return null;

  return localStorage.getItem("theme") as Theme.Value | null;
}

function applyTheme(theme: Theme.Value): void {
  if (typeof window === "undefined") return;

  document.documentElement.className = theme;
  localStorage.setItem("theme", theme);
}

export { getSystemTheme, getSavedTheme, applyTheme };
