import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ISideNavItem } from '../side-nav.component';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class SideNavItemComponent {
  @Input() sideNavItem?: ISideNavItem;
  isCollapsed: boolean = true;
  isActive: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isActive = this.router.url.includes(this.sideNavItem?.link || '');
      }
    });
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
