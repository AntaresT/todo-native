import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

export type TodoType = {
  id: number,
  title: string,
  description: string,
  isCompleted?: boolean,
  category: string,
}

type TaskTodoInterface = {
  todoTask: TodoType[],
  addTask: Dispatch<SetStateAction<TodoType[]>>,
  isPending: boolean,
  setIsPending: Dispatch<SetStateAction<boolean>>,
  completeTask: Dispatch<SetStateAction<Boolean>>,
  removeTask: Dispatch<SetStateAction<TodoType[]>>,
  mood: string;
  setMood: Dispatch<SetStateAction<string>>,
}

const TodoContext = createContext<TaskTodoInterface>({} as TaskTodoInterface);

type TodoProviderProps = {
  children: ReactNode
}

export function TodoProvider ({ children }: TodoProviderProps) {
  const [todo, setTodoTask] = useState<TodoType[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [mood, setMood] = useState<string>("");

  const value: TaskTodoInterface = {
    todoTask: todo,
    addTask: setTodoTask,
    setIsPending: setIsPending,
    isPending: isPending,
    mood,
    setMood,
    completeTask: () => {},
    removeTask: () => {}
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
};

export function useTodoProvider() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('verifique o uso do useTodoProvider');
  }
  return context;
};