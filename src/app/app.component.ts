import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'my-app',
  template: `<div>{{attribute | async}}</div>`
})
export class AppComponent {
  @Something()
  public attribute: Observable<string> = of('hello');
}

export function Something<T>() {
  return <U, K>(target: U, key: K): void  => {
    console.log(target, key);
  };
}
