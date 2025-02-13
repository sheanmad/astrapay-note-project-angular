import { TestBed } from '@angular/core/testing';
import { NoteService } from './note.service';
import { ApiService } from '../../../core/services/api.service';

describe('NoteService', () => {
  let service: NoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [NoteService] });
    service = TestBed.inject(NoteService);

    spyOn(ApiService, 'get').and.returnValue(Promise.resolve({ status: 'Success', messages: [], data: [] }));
    spyOn(ApiService, 'post').and.returnValue(Promise.resolve({}));
    spyOn(ApiService, 'put').and.returnValue(Promise.resolve({}));
    spyOn(ApiService, 'delete').and.returnValue(Promise.resolve());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Fetching Notes', () => {
    it('should return notes on success', async () => {
      const mockNotes = [{ id: 1, title: 'Title', content: 'Content' }];
      (ApiService.get as jasmine.Spy).and.returnValue(Promise.resolve({ status: 'Success', messages: [], data: mockNotes }));

      const notes = await service.getNotes();
      expect(notes).toEqual(mockNotes);
    });

    it('should return an empty array on failure', async () => {
      (ApiService.get as jasmine.Spy).and.returnValue(Promise.resolve({ status: 'Error', messages: ['Error fetching'], data: [] }));

      const notes = await service.getNotes();
      expect(notes).toEqual([]);
    });
  });

  describe('Fetching a Single Note', () => {
    it('should return a note by ID on success', async () => {
      const mockNote = { id: 1, title: 'Title', content: 'Content' };
      (ApiService.get as jasmine.Spy).and.returnValue(Promise.resolve({ status: 'Success', messages: [], data: mockNote }));

      const note = await service.getNoteById(1);
      expect(note).toEqual(mockNote);
    });

    it('should return null if note is not found', async () => {
      (ApiService.get as jasmine.Spy).and.returnValue(Promise.resolve({ status: 'Error', messages: ['Not found'], data: null }));

      const note = await service.getNoteById(99);
      expect(note).toBeNull();
    });
  });

  describe('CRUD Operations', () => {
    const mockNote = { id: 2, title: 'New Note', content: 'New content' };

    it('should add a note', async () => {
      (ApiService.post as jasmine.Spy).and.returnValue(Promise.resolve(mockNote));
      expect(await service.addNote(mockNote)).toEqual(mockNote);
    });

    it('should update a note', async () => {
      (ApiService.put as jasmine.Spy).and.returnValue(Promise.resolve(mockNote));
      expect(await service.updateNote(2, mockNote)).toEqual(mockNote);
    });

    it('should delete a note', async () => {
      await service.deleteNote(1);
      expect(ApiService.delete).toHaveBeenCalledWith('notes', '/1');
    });
  });
});