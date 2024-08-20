import { useState } from 'react'
import './App.css'
import { ITheme, ThemeContext, themes } from './context/ThemeContext'
import { Button } from './components/Button'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { TodoApp } from './components/TodoApp'

function App() {
  const [theme, setTheme] = useState<ITheme>(themes.dark)

  const themeToggle = () => {
    if(theme.name === "Dark") {
      setTheme(themes.light)
    } else {
      setTheme(themes.dark)
    }
  }
  return (
    <>
    {/* //Disclaimer - RouterProvider should wrap everything in it! */}
    <RouterProvider router={router}></RouterProvider>

    <ThemeContext.Provider value={theme}>
      <Button click={themeToggle}>
        <>Press to change to theme: { theme.name === "Dark" ? "Light" : "Dark" }</>
      </Button>
        <TodoApp />
    </ThemeContext.Provider>
    </>
  )
}

export default App
