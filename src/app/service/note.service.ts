import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/notes";

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }

  saveNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.url, note);
  }

  getNoteById(noteId: number): Observable<Note> {
    return this.http.get<Note>(`${this.url}/${noteId}`);
  }

  updateNote(noteId: number, note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.url}/${noteId}`, note);
  }

  deleteNote(noteId: number): Observable<{}> {
    return this.http.delete<{}>(`${this.url}/${noteId}`);
  }
}
