import { createContext, useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme'
import { GlobalStyle } from './styles/global'
import { Router } from '../Router'
import { Header } from './components/Header/Header'

export interface TaskType {
  id: string;
  isCompleted: boolean;
  taskDescription: string;
}

interface ToDoListContextType{
  toDoList: TaskType[];
  setToDoList: React.Dispatch<React.SetStateAction<TaskType[]>>;
}
export const toDoListContext = createContext({} as ToDoListContextType)

export default function App() {
  const [toDoList, setToDoList] = useState<TaskType[]>([] as TaskType[]);

  useEffect(() => {
    setToDoList([
      ...toDoList,
      { id: "1", isCompleted: false, taskDescription: "Testing Testing Testing" },
      { id: "2", isCompleted: false, taskDescription: "Debug Debug Debug Debug" }
    ]);
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <toDoListContext.Provider value={{toDoList, setToDoList}}>
        <HashRouter>
          <GlobalStyle />
          <Router />
        </HashRouter>
      </toDoListContext.Provider>
    </ThemeProvider>
  )
}