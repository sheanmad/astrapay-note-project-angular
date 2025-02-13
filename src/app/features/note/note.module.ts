import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NoteListComponent,
    NoteFormComponent,
    NoteDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class NoteModule { }
