import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dolce Confeitaria';

  public open(item) {
    console.log("teste");
    window.location.href=item;
  }
}
