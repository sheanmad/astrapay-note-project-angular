import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './features/note/components/note-list/note-list.component';
import { NoteFormComponent } from './features/note/components/note-form/note-form.component';
import { NoteDetailComponent } from './features/note/components/note-detail/note-detail.component';

const routes: Routes = [
  {path: '', component: NoteListComponent},
  {path: 'notes/:id', component: NoteDetailComponent},
  {path: 'note-form', component: NoteFormComponent},
  {path: 'note-form/:id', component: NoteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
