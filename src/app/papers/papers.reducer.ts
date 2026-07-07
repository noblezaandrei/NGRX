import { createReducer, on } from '@ngrx/store';
import { AddPapers, removePapers, addPapersSuccess, AddPapersFailure} from './papers.action';

import { Papers } from '../models/papers';

export const initialState: Papers[] = [];

export const papersReducer = createReducer(

  initialState,

  on(AddPapers, (state) => {
    return state;
  }),

  on(removePapers, (state, { paperId }) =>
    state.filter(paper => paper.id !== paperId)
  ),

  on(addPapersSuccess, (state, { paper }) =>
    [...state, paper]
  ),

  on(AddPapersFailure, (state, { error }) => {
    console.error(error);
    return state;
  })

);