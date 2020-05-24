import { Component } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Add, CountState, AddNumber } from "./app.state";

@Component({
  selector: "my-app",
  template: `
    <h1>Count is {{ count$ | async }}</h1>
    <button (click)="onClick()">Click Me</button>
    <button (click)="incrementBy(2)">Increment 2</button>
  `
})
export class AppComponent {
  @Select(state => state.countState.count) count$: Observable<number>;

  constructor(private store: Store) {}

  onClick() {
    this.store.dispatch(new Add());
  }

  incrementBy(value: number) {
    this.store.dispatch(new AddNumber(value));
  }
}
