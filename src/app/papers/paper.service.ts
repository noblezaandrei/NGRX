import { Injectable } from "@angular/core";
import { Papers } from "../models/papers";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PaperService {

  constructor() { }

  addPaper(paper: Papers): Observable<Papers> {
    return of(paper);
  }

}