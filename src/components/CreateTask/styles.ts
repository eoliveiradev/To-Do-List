import styled from "styled-components";

export const CreateTaskContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  min-height: 54px;
`

export const NewTaskInput = styled.input`
  flex: 1;
  height: 54px;

  border: 1px solid ${props => props.theme["colors"]["base-colors"]["gray-700"]};
  border-radius: 8px;
  outline: none;

  font-size: 1rem;
  text-indent: 16px;
  color: ${props => props.theme["colors"]["base-colors"]["gray-100"]};

  &::placeholder{
    color: ${props => props.theme["colors"]["base-colors"]["gray-300"]};
  }

  background-color: ${props => props.theme["colors"]["base-colors"]["gray-500"]};

  transition: 0.2s;

  &:focus, &:hover{
    outline: none;
    border-top: 1px solid ${props => props.theme["colors"]["brand-colors"]["purple"]};
    border-right: 1px solid ${props => props.theme["colors"]["brand-colors"]["purple"]};
    border-bottom: 1px solid ${props => props.theme["colors"]["brand-colors"]["blue"]};
    border-left: 1px solid ${props => props.theme["colors"]["brand-colors"]["blue"]};
  }
`

export const CreateNewTaskButton = styled.button`
  width: 90px;
  height: 52px;

  padding: 16px;

  color: ${props => props.theme["colors"]["base-colors"]["gray-100"]};

  border: 1px solid transparent;
  border-radius: 8px;

  background-color: ${props => props.theme["colors"]["brand-colors"]["blue-dark"]};

  transition: 0.2s;

  &:hover, &:focus{
    &:not(:disabled){
      background-color: ${props => props.theme["colors"]["brand-colors"]["blue"]};
      filter: drop-shadow(0 0 6px ${props => props.theme["colors"]["brand-colors"]["purple"]});
    }
  }

  &:disabled{
    opacity: 0.8;
    cursor: not-allowed;
  }
`