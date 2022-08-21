import { HomeContainer } from "./styles";
import { ToDoList } from "./components/ToDoList/ToDoList";

export function Home() {
  return (
    <HomeContainer>
      <ToDoList />
    </HomeContainer>
  )
}