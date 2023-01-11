import { screen, render, fireEvent } from '@testing-library/react';
import { describe, it, expect, } from "vitest"
import { ThemeProvider } from 'styled-components';
import { ToDoListContextProvider } from '../../../../contexts/ToDoListContext';
import { defaultTheme } from '../../../../styles/theme/defaultTheme';
import { ToDoList } from './ToDoList';

describe("ToDoList", () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <ToDoListContextProvider>
        <ToDoList />
      </ToDoListContextProvider>
    </ThemeProvider>
  )

  const input = screen.getByPlaceholderText("Adicione uma nova tarefa") as HTMLInputElement;
  const submit = screen.getByText("Criar");

  it("creates a new task", async () => {
    fireEvent.change(input, { target: { value: "Nova tarefa" } });

    expect(input.value).toBe("Nova tarefa");

    fireEvent.click(submit);

    expect(input.value).toBe("");

    expect(screen.getByText("Nova tarefa")).toBeInTheDocument();
  });
});