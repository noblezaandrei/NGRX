import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PapersActions from "./papers.action";
import { PaperService } from "./paper.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class PapersEffects {

  constructor(
    private actions$: Actions,
    private paperService: PaperService
  ) {}

  addPaper$ = createEffect(() => this.actions$.pipe(

    ofType(PapersActions.AddPapers),

    mergeMap(action =>
      this.paperService.addPaper(action.paper).pipe(

        map(paper =>
          PapersActions.addPapersSuccess({ paper })
        ),

        catchError(error =>
          of(PapersActions.AddPapersFailure({ error }))
        )

      ))
  ));

}