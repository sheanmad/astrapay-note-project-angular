import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-form',
  standalone: false,
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css'
})
export class NoteFormComponent implements OnInit{

  note:any = {
    title: '',
    content: ''
  };
  isEdit = false;

  constructor(
    private readonly noteService: NoteService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isEdit = true;
      this.noteService.getNoteById(+id).then((response) => {
        this.note = response.data;
      }).catch(error => {
        console.error('Error fetching note:', error);
      });
    }
  }

  saveNote(): void{
    if(this.isEdit){
      this.noteService.updateNote(this.note.id, this.note).then(() => {
        this.router.navigate(['/']);
      }).catch(error => {
        console.error('Error updating note:', error);
      });
    }else{
      this.noteService.addNote(this.note).then(() => {
        this.router.navigate(['/']);
      }).catch(error => {
        console.error('Error adding note:', error);
      });
    }
  }

}
