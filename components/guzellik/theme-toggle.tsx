"use client";

import { Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.getElementById("guzellik-theme-root");
  if (root) {
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-guzellik-theme", theme);
  }

  localStorage.setItem("guzellik-theme", theme);
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("guzellik-theme");
    const currentTheme: Theme =
      storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";

    applyTheme(currentTheme);
    setTheme(currentTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="cta-secondary px-4"
      aria-label={mounted && theme === "dark" ? "Açık moda geç" : "Koyu moda geç"}
    >
      {mounted && theme === "dark" ? (
        <SunMedium className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
