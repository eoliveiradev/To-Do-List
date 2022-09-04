import { FinishedTasks, TaskCounterContainer, TasksCreated } from "./styles";
import { useContext, useEffect, useState } from "react";
import { ToDoListContext } from "../../contexts/ToDoListContext";

export function TaskCounter() {
  const { toDoList} = useContext(ToDoListContext)
  const [ numberOfCreatedTaks, setNumberOfCreatedTaks ] = useState(0)
  const [ numberOfFinishedTaks, setNumberOfFinishedTaks ] = useState(0)

  useEffect(() => {
    setNumberOfCreatedTaks(toDoList.length)

    const finishedTaks = toDoList
    .filter(item => item.isCompleted)

    setNumberOfFinishedTaks(finishedTaks.length) 
  }, [toDoList]);

  return (
    <TaskCounterContainer>

      <TasksCreated>
        <strong>
          Tarefas criadas
        </strong>
        <span>
          {numberOfCreatedTaks}
        </span>
      </TasksCreated>

      <FinishedTasks>
        <strong>
          Concluídas
        </strong>
        <span>
          {numberOfCreatedTaks === 0 ? (
            numberOfFinishedTaks
          ): (
            `
              ${numberOfFinishedTaks}
              de
              ${numberOfCreatedTaks}
            `
          )}
        </span>
      </FinishedTasks>
      
    </TaskCounterContainer>
  )
}