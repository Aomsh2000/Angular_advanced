
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from './tasks.reducer';
import { addTask, completeTask, deleteTask } from './tasks.actions';
import { selectTasks,selectAllTasks } from './tasks.selectors';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-root',
    standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoListForm: FormGroup;
  tasks$: Observable<Task[]>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.todoListForm = this.fb.group({
      task: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.tasks$ = this.store.select(selectAllTasks);

  }

  onSubmit(): void {
    if (this.todoListForm.valid) {
      const task = this.todoListForm.value.task;
      this.store.dispatch(addTask({ task }));
      this.todoListForm.reset();  // Reset the form after submitting
    }
  }

  onCompleteTask(id: number): void {
    this.store.dispatch(completeTask({ id }));
  }

  onDeleteTask(id: number): void {
    this.store.dispatch(deleteTask({ id }));
  }

  get task() {
    return this.todoListForm.get('task');
  }
}

