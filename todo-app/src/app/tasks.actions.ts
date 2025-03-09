import { createAction, props } from '@ngrx/store';

// Define the action types
export const addTask = createAction(
  '[Task List] Add Task',
  props<{ task: string }>()
);

export const deleteTask = createAction(
  '[Task List] Delete Task',
  props<{ id: number }>()
);

export const completeTask = createAction(
  '[Task List] Complete Task',
  props<{ id: number }>()
);
