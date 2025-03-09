import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReactiveFormsModule,CommonModule]
})
export class AppComponent {
  todoForm: FormGroup;  // Declare the form group

  constructor(private fb: FormBuilder) {
    // Create the form with validation
    this.todoForm = this.fb.group({
      task: ['', [Validators.required, Validators.minLength(3)]] // Validators for required and min length
    });
  }

  // Submit handler
  onSubmit() {
    if (this.todoForm.valid) {
      // For now, log the value of the form
      console.log(this.todoForm.value);

      // Reset the form after submission
      this.todoForm.reset();
    }
  }

  // Get the task control to show validation error messages
  get task() {
    return this.todoForm.get('task');
  }
}
