import { Injectable } from "@angular/core";
import { State, Action, StateContext, Store } from "@ngxs/store";
import { Observable } from "rxjs";

export class Add {
  static readonly type = "Add";
}

export class AddNumber {
  static readonly type = "AddNumber";
  constructor(public number: number) {}
}

export interface CountModel {
  count: number;
}

@State<CountModel>({
  name: "countState",
  defaults: {
    count: 0
  }
})
@Injectable()
export class CountState {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(state => state.count);
  }

  @Action(Add)
  add(ctx: StateContext<CountModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      count: state.count + 1
    });
  }

  @Action(AddNumber)
  addNumber(ctx: StateContext<CountModel>, action: AddNumber) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      count: state.count + action.number
    });
  }
}
