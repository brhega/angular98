import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormMockupComponent } from "./form-mockup/form-mockup.component";

@Component({
  selector: 'app-root',
  imports: [FormMockupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular98';
}
