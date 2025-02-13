import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../../services/note.service';

interface Note {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-note-detail',
  standalone: false,
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent implements OnInit {
  note: Note | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly noteService: NoteService
  ) { }

  ngOnInit(): void {
    const noteId = this.route.snapshot.paramMap.get('id');
    console.log(noteId);
    if (noteId) {
      const noteIdNumber = +noteId;
      this.noteService.getNoteById(noteIdNumber).then(note => {
        this.note = note;
        console.log('Fetched note:', this.note);
      }).catch(error => {
        console.error('Error fetching note:', error);
      });
    }
  }
}
