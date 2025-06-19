import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-angular';
}
