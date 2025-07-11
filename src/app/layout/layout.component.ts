import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from '../shared/side-nav/side-nav.component';
import { TopNavComponent } from '../shared/top-nav/top-nav.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [RouterModule, SideNavComponent, TopNavComponent],
})
export class LayoutComponent {
  isSideNavOpen = true;

  toggleSidebar() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
