import { CheckBoxContainer, DeleteTaskButton, TaskContainer } from "./styles";
import { TaskType, toDoListContext } from "../../App"
import { Check, Trash } from "phosphor-react";
import { useContext } from "react";

interface TaskProps {
  task: TaskType;
}

export function Task(props: TaskProps) {
  const { toDoList, setToDoList } = useContext(toDoListContext)

  let newToDoList = [...toDoList]
  const taskIndex = toDoList.findIndex(item => item.id === props.task.id)
  
  function handleCheckTask() {
    newToDoList[taskIndex].isCompleted = !props.task.isCompleted
    setToDoList(newToDoList)
  }

  function handleDeleteTask() {
    newToDoList.splice(taskIndex, 1)
    setToDoList(newToDoList)
  }

  return (
    <TaskContainer>
      <CheckBoxContainer>
        <input
          type="checkbox"
          checked={props.task.isCompleted}
          onClick={() => handleCheckTask()}
        />
        <span id="custom-checkbox">
          <Check size={12} color="#fafafa" weight="fill" />
        </span>
      </CheckBoxContainer>
      <p className={props.task.isCompleted ? "task-completed" : undefined}>
        {props.task.taskDescription}
      </p>
      <DeleteTaskButton
        onClick={() => handleDeleteTask()}
      >
        <Trash
          id="trash-icon"
          size={16}
        />
      </DeleteTaskButton>
    </TaskContainer>
  )
}