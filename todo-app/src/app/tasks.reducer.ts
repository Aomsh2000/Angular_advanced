import { createReducer, on } from '@ngrx/store';
import { addTask, deleteTask, completeTask } from './tasks.actions';

export interface Task {
  id: number;
  task: string;
  completed: boolean;
}

export interface TasksState {
  tasks: Task[];
}

export const initialState: TasksState = {
  tasks: [],
};

let taskId = 1;

export const tasksReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, { id: taskId++, task, completed: false }]
  })),
  on(deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
  })),
  on(completeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    )
  }))
);