import styled from "styled-components";
import { CreateTaskContainer } from "../../../../components/CreateTask/styles";

export const ToDoListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  width: 100%;
  min-height: 288px;

  ${CreateTaskContainer}{
    margin-bottom: 40px;
  }
`

export const TaskList = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  width: 100%;
  min-height: 244px;

  hr{
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme["colors"]["base-colors"]["gray-400"]};
  }
`

export const NoTaskRegistered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 244px;

  h1,p{
    text-align: center;

    font-size: 1rem;
    color: ${props => props.theme["colors"]["base-colors"]["gray-300"]};
  }

  h1{
    font-weight: 700;
    margin-top: 16px;
  }

  p{
    font-weight: 400;
  }
`