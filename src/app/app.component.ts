import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './service/theme.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule], // ✅ This was missing!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Load default theme on startup
    this.themeService.loadStoredTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
