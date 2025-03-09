import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Ensure ReactiveFormsModule is imported
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { tasksReducer } from './tasks.reducer';  // Replace with the actual path
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';  // Import AppComponent here

@NgModule({
  declarations: [AppComponent],  // Declare the AppComponent
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,  // Include ReactiveFormsModule in imports
    StoreModule.forRoot({ tasks: tasksReducer }),  // Register your reducer here
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })  // Devtools setup for development
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap AppComponent
})
export class AppModule { }
