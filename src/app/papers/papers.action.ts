import { createAction, props } from '@ngrx/store';
import { Papers } from '../models/papers';

export const AddPapers = createAction(
  '[Papers] Add Papers',
  props<{ paper: Papers }>()
);

export const removePapers = createAction(
  '[Papers] Remove Papers',
  props<{ paperId: number }>()
);

export const addPapersSuccess = createAction(
  '[Papers] Add Papers Success',
  props<{ paper: Papers }>()
);

export const AddPapersFailure = createAction(
  '[Papers] Add Papers Failure',
  props<{ error: any }>()
);