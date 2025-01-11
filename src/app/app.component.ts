import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro.component';
import { WorkHistoryComponent } from './work-history.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroComponent, WorkHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularSite';
}
