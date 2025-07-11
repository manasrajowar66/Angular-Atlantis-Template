// src/app/services/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isDarkMode = true;

  constructor() {
    this.loadStoredTheme(); // Restore saved theme on service init
  }

  /** Toggle between dark and light themes */
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('dark-mode', this.isDarkMode.toString());
  }

  /** Apply current theme state */
  private applyTheme(): void {
    const html = document.documentElement;
    if (this.isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  /** Load theme from localStorage on init */
  loadStoredTheme(): void {
    const saved = localStorage.getItem('dark-mode');
    this.isDarkMode = saved === 'true';
    this.applyTheme();
  }

  /** Getter to use in UI (e.g., toggle label/icon) */
  isDark(): boolean {
    return this.isDarkMode;
  }
}