import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  imports: [MenuModule, Button],
})
export class TopNavComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @ViewChild('profileMenu') profileMenu!: Menu;

  constructor(private themeService: ThemeService) {}

  profileItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user', command: () => this.goToProfile() },
    { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.logout() },
  ];

  toggleProfileMenu(event: MouseEvent) {
    this.profileMenu.toggle(event);
  }

  goToProfile() {
    console.log('Go to Profile');
    // Add navigation or logic here
  }

  logout() {
    console.log('Logout');
    // Add logout logic here
  }

  toggleTheme(){
    this.themeService.toggleTheme();
  }
}
