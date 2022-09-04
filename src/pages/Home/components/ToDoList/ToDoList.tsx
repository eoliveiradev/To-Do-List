import { ClipboardText } from "phosphor-react";
import { useContext } from "react";
import { CreateTask } from "../../../../components/CreateTask/CreateTask";
import { Task } from "../../../../components/Task/Task";
import { TaskCounter } from "../../../../components/TaskCounter/TaskCounter";
import { ToDoListContext } from "../../../../contexts/ToDoListContext";
import { NoTaskRegistered, TaskList, ToDoListContainer } from "./styles";

export function ToDoList() {
  const { toDoList } = useContext(ToDoListContext);
  
  return (
    <ToDoListContainer>
      <CreateTask />
      <TaskCounter />
      <TaskList>
        {toDoList.length > 0 ? (
          toDoList.map((task, index) => (
            <Task 
              key={index}
              task={task} 
            />
          ))
        ) : (
          <>
            <hr />
            <NoTaskRegistered>
              <ClipboardText size={56} color="#3d3d3d" />
              <h1>Você ainda não tem tarefas cadastradas</h1>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </NoTaskRegistered>
          </>
        )}
      </TaskList>
    </ToDoListContainer>
  )
}