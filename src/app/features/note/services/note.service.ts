import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private readonly endpoint = 'notes';

  getNotes() {
    return ApiService.get<{ status: string; messages: string[]; data: any[] }>(this.endpoint)
      .then(response => {
        if (response.status === 'Success') {
          return response.data;
        } else {
          console.error('Failed to fetch notes:', response.messages);
          return [];
        }
      });
  }

  getNoteById(id: number) {
    return ApiService.get<any>(this.endpoint, `/${id}`);
  }

  addNote(note: any) {
    return ApiService.post<any>(this.endpoint, '/add', note);
  }

  updateNote(id: number, note: any) {
    return ApiService.put<any>(this.endpoint, `/${id}`, note);
  }

  deleteNote(id: number) {
    return ApiService.delete<void>(this.endpoint, `/${id}`);
  }
}
