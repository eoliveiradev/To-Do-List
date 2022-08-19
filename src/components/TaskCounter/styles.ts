import styled from "styled-components";

export const TaskCounterContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 20px;
`

export const BaseCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  strong{
    font-size: 0.875rem;
    font-weight: 700;
  }

  span{
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 26px;
    height: 20px;

    padding: 0 8px;

    border-radius: 999px;

    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => props.theme["colors"]["base-colors"]["gray-200"]};

    background-color: ${props => props.theme["colors"]["base-colors"]["gray-400"]};
  }
`

export const TasksCreated = styled(BaseCounter)`
  strong{
    color: ${props => props.theme["colors"]["brand-colors"]["blue"]};
  }
`

export const FinishedTasks = styled(BaseCounter)`
  strong{
    color: ${props => props.theme["colors"]["brand-colors"]["purple"]};
  }
`