import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

interface MenuItem {
  readonly label: string;
  readonly path: string;
}

@Component({
  imports: [RouterLink, RouterLinkActive, NgClass],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  menuItems: readonly MenuItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Itineraries', path: '/itineraries' },
  ];

  onToggle() {
    this.toggleSidebar.emit();
  }
}
