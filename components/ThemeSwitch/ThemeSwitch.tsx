import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    console.log(theme)
  }, [theme])

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    mounted && (
      <DarkModeSwitch
        className="select-none"
        checked={theme === 'dark' || resolvedTheme === 'dark'}
        onChange={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
        size={26}
        sunColor="#1f2937"
      />
    )
  )
}
