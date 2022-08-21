import styled from "styled-components";
import { ToDoListContainer } from "./components/ToDoList/styles";

export const HomeContainer = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 95%;
  max-width: 736px;

  ${ToDoListContainer}{
    position: absolute;
    top: -27px;
  }
`