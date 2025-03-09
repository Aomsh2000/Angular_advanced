import {  createFeatureSelector,createSelector } from '@ngrx/store';
import { TasksState } from './tasks.reducer';

// Select the tasks slice of the state
export const selectTasks = createFeatureSelector<TasksState>('tasks'); 

// Select all tasks
export const selectAllTasks = createSelector(
    selectTasks,
    (state: TasksState) => state?.tasks || []
  );

// Select completed tasks
export const selectCompletedTasks = createSelector(
  selectTasks,
  (tasks: TasksState) => tasks.tasks.filter(task => task.completed)
);

// Select pending tasks
export const selectPendingTasks = createSelector(
  selectTasks,
  (tasks: TasksState) => tasks.tasks.filter(task => !task.completed)
);
