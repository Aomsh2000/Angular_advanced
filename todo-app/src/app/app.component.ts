import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask, completeTask, deleteTask } from './tasks.actions'; // Make sure you have these actions defined
import { selectCompletedTasks, selectPendingTasks } from './tasks.selectors'; // Make sure you have these selectors defined

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoForm: FormGroup;
  pendingTasks$ ;
  completedTasks$ ;

  constructor(private fb: FormBuilder, private store: Store) {
    // Create the form with validation
    this.todoForm = this.fb.group({
      task: ['', [Validators.required, Validators.minLength(3)]]
    });
    // Initialize observables for pending and completed tasks after the constructor
    this.pendingTasks$ = this.store.select(selectPendingTasks);
    this.completedTasks$ = this.store.select(selectCompletedTasks);
  }

  // Submit handler to add a task
  onSubmit() {
    if (this.todoForm.valid) {
      const task = this.todoForm.value.task;
      this.store.dispatch(addTask({ task }));
      this.todoForm.reset();  // Reset form after submitting
    }
  }

  // Function to mark task as completed
  onCompleteTask(taskId: number) {
    this.store.dispatch(completeTask({ taskId }));
  }

  // Function to delete task
  onDeleteTask(taskId: number) {
    this.store.dispatch(deleteTask({ taskId }));
  }

  // Get task control for validation checks
  get task() {
    return this.todoForm.get('task');
  }
}
