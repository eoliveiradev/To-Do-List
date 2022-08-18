import { useState } from 'react'
import { HashRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme'
import { GlobalStyle } from './styles/global'
import { Router} from '../Router'
import { Header } from './components/Header/Header'

interface taskType{
  isCompleted: boolean;
  taskDescription: string;
}

export default function App() {
  const [toDoList, setToDoList] = useState<taskType[]>([] as taskType[]);

  setToDoList([
    ...toDoList, 
    {isCompleted: false, taskDescription: "Testing Testing Testing"},
    {isCompleted: false, taskDescription: "Debug Debug Debug Debug"}
  ]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <GlobalStyle/>
        <Router />
      </HashRouter>
    </ThemeProvider>
  )
}