import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  imports: [CommonModule],
})
export class SideNavComponent {
  @Input() isOpen: boolean = true;
}
