import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [HomeComponent, RouterOutlet]
})
export class AppComponent {
  title = 'app works!';
  name = 'ninja';
  ninja = {
    name: "Ryu",
    belt: "Red"
  };
  yell(e) {
    alert("I am yelling");
  }
}
