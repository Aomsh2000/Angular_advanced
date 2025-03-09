import { createSelector } from '@ngrx/store';
import { TasksState } from './tasks.reducer';

// Select the tasks slice of state
export const selectTasks = (state: { tasks: TasksState }) => state.tasks;

// Select all tasks
export const selectAllTasks = createSelector(
  selectTasks,
  (state: TasksState) => state.tasks
);

// Select completed tasks
export const selectCompletedTasks = createSelector(
  selectTasks,
  (state: TasksState) => state.tasks.filter(task => task.completed)
);

// Select pending tasks
export const selectPendingTasks = createSelector(
  selectTasks,
  (state: TasksState) => state.tasks.filter(task => !task.completed)
);
