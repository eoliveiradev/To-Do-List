import React, { useContext } from "react";
import { toDoListContext } from "../../App";
import { Header } from "../../components/Header/Header";
import { Task } from "../../components/Task/Task";
import { HomeContainer, NoTaskRegistered, TaskList, TaskSection } from "./styles";
import { ClipboardText } from "phosphor-react";
import { TaskCounter } from "../../components/TaskCounter/TaskCounter";

export function Home() {
  const { toDoList } = useContext(toDoListContext);
  return (
    <HomeContainer>
      <TaskSection>
        <TaskCounter />
        <TaskList>
          {toDoList.length > 0 ? (
            toDoList.map(task => (
              <Task task={task} />
            ))
          ) : (
            <>
              <hr/>
              <NoTaskRegistered>
                <ClipboardText size={56} color="#3d3d3d" />
                <h1>Você ainda não tem tarefas cadastradas</h1>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </NoTaskRegistered>
            </>
          )}
        </TaskList>
      </TaskSection>
    </HomeContainer>
  )
}