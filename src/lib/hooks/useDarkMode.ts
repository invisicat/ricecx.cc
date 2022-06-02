import { useEffect, useState } from 'react';

type DarkModeState = 'dark' | 'light';
type SetDarkModeState = React.Dispatch<React.SetStateAction<DarkModeState>>;

export default function useDarkMode() {
  const [theme, setTheme] = useState<DarkModeState>('dark');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!theme) setTheme(localStorage.theme);
    }
    console.log(`Dark Mode >> Changed theme to ${theme}`);
    const currentColorTheme = theme === 'dark' ? 'light' : 'dark';

    const root = window.document.documentElement;

    root.classList.remove(currentColorTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [theme, setTheme] as const;
}
