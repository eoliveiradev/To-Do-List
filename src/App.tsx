import { createContext, useEffect, useRef, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme'
import { GlobalStyle } from './styles/global'
import { Router } from '../Router'
import { ToDoListContextProvider } from './contexts/ToDoListContext'

export interface TaskType {
  id: string;
  isCompleted: boolean;
  taskDescription: string;
}

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToDoListContextProvider>
        <HashRouter>
          <GlobalStyle />
          <Router />
        </HashRouter>
      </ToDoListContextProvider>
    </ThemeProvider>
  )
}