import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  width: 100%;
  max-width: 736px;
  min-height: 72px;

  padding: 16px;

  border: 1px solid ${props => props.theme["colors"]["base-colors"]["gray-400"]};

  background-color: ${props => props.theme["colors"]["base-colors"]["gray-500"]};

  p{
    flex: 1;

    font-size: 0.875rem;
    color: ${props => props.theme["colors"]["base-colors"]["gray-100"]};

    &.task-completed{
      text-decoration: line-through;
      color: ${props => props.theme["colors"]["base-colors"]["gray-300"]};
    }
  }
`

export const CheckBoxContainer = styled.label`
  input{
    position: absolute;
    width: 0px;
    height: 0px;

    &:focus-visible{
      outline: none;

      & + #custom-checkbox{
        outline: 1px solid black;
        outline-offset: 4px;
        outline-color: white;
      }
    }

    &:checked + #custom-checkbox{
      background-color: ${props => props.theme["colors"]["brand-colors"]["purple-dark"]};
      border-color: ${props => props.theme["colors"]["brand-colors"]["purple-dark"]};

      &:hover{
        background-color: ${props => props.theme["colors"]["brand-colors"]["purple"]};
        border-color: ${props => props.theme["colors"]["brand-colors"]["purple"]};
      }
    }
  }

  #custom-checkbox{
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 18px;
    height: 18px;

    border: 1px solid ${props => props.theme["colors"]["brand-colors"]["blue"]};
    border-radius: 50%;

    cursor: pointer;

    &:hover{
      border-color: ${props => props.theme["colors"]["brand-colors"]["blue-dark"]};
      background-color: rgba(30, 111, 159, 0.2);
    }
  }
`

export const DeleteTaskButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 4px;

  background: none;

  #trash-icon{
    color: ${props => props.theme["colors"]["base-colors"]["gray-300"]};
  }

  &:hover{
    #trash-icon{
      color: ${props => props.theme["colors"]["base-colors"]["danger"]};
    }
  }
`