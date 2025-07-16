import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavItemComponent } from './side-nav-item/side-nav-item.component';

export type ISideNavItem = {
  label: string;
  icon: string;
  link?: string;
  children?: ISideNavItem[]
}

export type ISideNavItems = {
  rootText: string;
  children?: ISideNavItem[]
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  imports: [CommonModule, RouterModule, SideNavItemComponent],
})
export class SideNavComponent {
  @Input() isOpen: boolean = true;
  sideNavItems: ISideNavItems[] = [
    {
      rootText: "Dashboard",
      children: [
          {
            label: "E-Commerce",
            icon: "pi pi-home",
            link: "/"
          }
      ]
    },
    {
      rootText: "Apps",
      children: [
          {
            label: "Blogs",
            icon: "pi pi-comment",
            link: "/apps/blogs",
            children: [
              {
                label: "List",
                icon: "pi pi-image",
                link: "/apps/blogs/list",
              },
              {
                label: "Details",
                icon: "pi pi-list",
                link: "/apps/blogs/details",
              },
              {
                label: "Edit",
                icon: "pi pi-pencil",
                link: "/apps/blogs/edit",
              }
            ]
          },
          {
            label: "Chat",
            icon: "pi pi-comments",
            link: "/chat"
          },
          {
            label: "Files",
            icon: "pi pi-folder",
            link: "/files"
          },
          {
            label: "Mail",
            icon: "pi pi-envelope",
            link: "/mail"
          },
          {
            label: "Task List",
            icon: "pi pi-check-square",
            link: "/task-list"
          }
      ]
    },
    {
      rootText: "UI Kit",
      children: [
          {
            label: "Form layout",
            icon: "pi pi-id-card",
            link: "/ui-kit/form-layout"
          },
          {
            label: "Input",
            icon: "pi pi-check-square",
            link: "/ui-kit/input"
          },
          {
            label: "Button",
            icon: "pi pi-box",
            link: "/ui-kit/button"
          },
          {
            label: "Table",
            icon: "pi pi-table",
            link: "/ui-kit/table"
          }
      ]
    },
    {
      rootText: "Prime Blocks",
      children: [
          {
            label: "Free Blocks",
            icon: "pi pi-eye",
            link: "/prime-blocks/free-blocks"
          }
      ]
    },
  ]
}
