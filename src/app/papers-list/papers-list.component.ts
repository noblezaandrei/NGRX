import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AddPapers } from '../papers/papers.action';

@Component({
  selector: 'app-papers-list',
  templateUrl: './papers-list.component.html',
  styleUrls: ['./papers-list.component.css']
})
export class PapersListComponent {

  constructor(private store: Store<AppState>) {}

  publishedDate = '';

  paper = {
    id: 0,
    title: '',
    author: '',
    abstract: '',
    publishedDate: new Date()
  };

  savedPaper: any = null;

  addPaper() {

    this.paper.id = Date.now();
    this.paper.publishedDate = new Date(this.publishedDate);

    this.store.dispatch(
      AddPapers({
        paper: this.paper
      })
    );

  
    this.savedPaper = { ...this.paper };

    // I-clear ang form
    this.paper = {
      id: 0,
      title: '',
      author: '',
      abstract: '',
      publishedDate: new Date()
    };

    this.publishedDate = '';

  }

}