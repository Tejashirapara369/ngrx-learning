import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as selector from './store/selector/app.selector';
import * as action from './store/action/app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-learning';

  counter$ = this.store.select(selector.counterSelector);

  numb!: number;

  constructor(private store: Store) {}

  increateCounter() {
    this.store.dispatch(action.increaseCounter());
  }
  decreateCounter() {
    this.store.dispatch(action.decreaseCounter());
  }
  addNumber() {
    if (this.numb)
      this.store.dispatch(action.AddByNumber({ counter: this.numb }));
  }
  reset() {
    this.store.dispatch(action.resetCounter());
  }
}
