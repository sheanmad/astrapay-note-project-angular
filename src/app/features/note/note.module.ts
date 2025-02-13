import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteFormComponent } from './components/note-form/note-form.component';



@NgModule({
  declarations: [
    NoteListComponent,
    NoteFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class NoteModule { }
