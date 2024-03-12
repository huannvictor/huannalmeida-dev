'use client';

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from "./ui/button";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <SunIcon
          className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"
        />
        <MoonIcon
          className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </Button>
    </div>
  )
}
