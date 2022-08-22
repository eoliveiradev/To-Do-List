import { createContext, useEffect, useRef, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme'
import { GlobalStyle } from './styles/global'
import { Router } from '../Router'

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

  const getDB = (DB: string) => JSON.parse(localStorage.getItem(DB) as string) ?? [];
  const setDB = (DBName: string, newDB: any) => localStorage.setItem(DBName, JSON.stringify(newDB));

  const  isToDoListStorageFirstCall = useRef(true)
  function handleToDoListStorage() {
    const localDB = getDB("toDoList")
    if(localDB === null){
      setDB("toDoList", toDoList)
    }else if(isToDoListStorageFirstCall.current){
      setToDoList(localDB)
      isToDoListStorageFirstCall.current = false
    }else{
      setDB("toDoList", toDoList)
    }
  }

  useEffect(() => {
    handleToDoListStorage()
  }, [toDoList])

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