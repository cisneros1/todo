import { create } from "zustand";
import { number } from "prop-types";

export interface TaskInterface {
  taskId: number;
  taskName: string;
}

export interface TaskList {
  tasks: Task[];
  addTask: (task: TaskInterface) => void;
  removeTask: (taskId: number) => void;
}

export const useDataStore = create<TaskList>((set) => ({
  tasks: [
    {
      taskId: 1,
      taskName: "Task Default",
    },
  ],
  addTask: (task: Task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  removeTask: (taskId: number) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.taskId !== taskId),
    })),
}));
