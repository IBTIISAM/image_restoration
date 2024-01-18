"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button";


export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="border-l pl-3">
        <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
        </Button>
    </div>

  )


}
