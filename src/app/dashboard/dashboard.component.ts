import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notes: Note[] = NOTES;
  note: Note = {};
  searchText: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  searchNote(){
    this.notes = NOTES;
    if(this.searchText !== "")
      this.notes = this.notes.filter(note => note?.title?.includes(this.searchText));
  }
    
}
