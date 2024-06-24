import { create } from "zustand";

export interface TaskInterface {
  taskId: number;
  taskName: string;
}

export interface TaskList {
  tasks: TaskInterface[];
  addTask: (task: TaskInterface) => void;
  removeTask: (taskId: number) => void;
}

export const useDataStore = create<TaskList>((set) => ({
  tasks: [],
  addTask: (task: TaskInterface) => {
    console.log("adding task");
    set((state) => ({
      tasks: [...state.tasks, task],
    }));
  },
  removeTask: (taskId: number) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.taskId !== taskId),
    })),
}));
