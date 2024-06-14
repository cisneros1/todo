import { create } from "zustand";

export interface TaskState {
  taskId: string;
  taskMode: boolean;
  changeTaskMode: () => void;
}

export const useTaskMode = create<TaskState>((set) => ({
  taskId: "",
  taskMode: true,
  changeTaskMode: () =>
    set((state) => ({
      ...state,
      taskMode: !state.taskMode,
    })),
}));
