import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  standalone: false,
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {
  notes: any[] = [];
  constructor(
    private readonly noteService: NoteService,
    private readonly router:Router
  ) {}

  ngOnInit() {
    this.loadNotes()
  }

  loadNotes():void{
    this.noteService.getNotes().then(data => {
      this.notes = data
    });
  }

  deleteNotes(id: number):void{
    this.noteService.deleteNote(id).then(() => {
      this.loadNotes();
    });
  }
  
  addNote():void{
    this.router.navigate([`note-form`]);
  }

  editNote(id: number):void{
    this.router.navigate([`note-form/${id}`]);
  }
}
