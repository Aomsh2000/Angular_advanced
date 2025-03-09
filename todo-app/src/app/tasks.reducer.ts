import { createReducer, on } from '@ngrx/store';
import { addTask, completeTask, deleteTask } from './tasks.actions';

export interface Task {
  id: number;
  task: string;
  completed: boolean;
}

export interface TasksState {
  tasks: Task[];
}

export const initialState: TasksState = {
  tasks: []
};

export const tasksReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, { id: Date.now(), task, completed: false }]
  })),
  on(completeTask, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    )
  })),
  on(deleteTask, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== taskId)
  }))
);
