import { Children, createContext, ReactNode, useEffect, useRef, useState } from "react"
import { TaskType } from "../App";
import { getLS, setLS } from "../utilities/localStorage";

interface ToDoListContextProviderProps {
  children: ReactNode;
}

interface ToDoListContextType {
  toDoList: TaskType[];
  setToDoList: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export const ToDoListContext = createContext({} as ToDoListContextType)

export function ToDoListContextProvider( 
  { children }: ToDoListContextProviderProps
  ) {
  const [toDoList, setToDoList] = useState<TaskType[]>([] as TaskType[]);

  const isToDoListStorageFirstCall = useRef(true)
  function handleToDoListStorage() {
    const localLS = getLS("toDoList")
    if (localLS === null) {
      setLS("toDoList", toDoList)
    } else if (isToDoListStorageFirstCall.current) {
      setToDoList(localLS)
      isToDoListStorageFirstCall.current = false
    } else {
      setLS("toDoList", toDoList)
    }
  }

  useEffect(() => {
    handleToDoListStorage()
  }, [toDoList])

  return (
    <ToDoListContext.Provider value={{ toDoList, setToDoList }}>
      {children}
    </ToDoListContext.Provider>
  )
}