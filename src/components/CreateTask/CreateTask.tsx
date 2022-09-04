import { useContext, useRef, useState } from "react"

import { CreateNewTaskButton, CreateTaskContainer, NewTaskInput } from "./styles"
import { PlusSign } from "../../assets/images"
import { ToDoListContext } from "../../contexts/ToDoListContext"
import { TaskType } from "../../App"

export function CreateTask(){
  const { toDoList, setToDoList } = useContext(ToDoListContext)
  const [newTaskContent, setNewTaskContent] = useState("")

  const newTaskInput = useRef<HTMLInputElement>(null)

  function handleCreateNewTask(){
    const newTask : TaskType = {
      id: String(new Date().getTime() + toDoList.length),
      isCompleted: false,
      taskDescription: newTaskContent
    }

    let newToDoList = [...toDoList]

    newToDoList.unshift(newTask)

    setToDoList(newToDoList)

    if(newTaskInput.current){
      newTaskInput.current.value = ""
      setNewTaskContent("")
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) { 
    const keys = {
      "Enter": () => newTaskContent.length > 0 && handleCreateNewTask()
    }
    if (Object.keys(keys).includes((event.key))) {
      keys[event.key as keyof typeof keys]()
    }
  }

  return(
    <CreateTaskContainer>
      <NewTaskInput 
        type="text"
        placeholder="Adicione uma nova tarefa"
        ref={newTaskInput}
        onChange={(e) => setNewTaskContent(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <CreateNewTaskButton 
        type="button"
        disabled={newTaskContent.length === 0}
        onClick={() => handleCreateNewTask()}
      >
        Criar
        <img src={PlusSign} alt="Sinal de adição"/>
      </CreateNewTaskButton>
    </CreateTaskContainer>
  )
}