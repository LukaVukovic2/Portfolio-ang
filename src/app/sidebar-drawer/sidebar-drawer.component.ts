import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-drawer',
  templateUrl: './sidebar-drawer.component.html',
  styleUrl: './sidebar-drawer.component.css',
})
export class SidebarDrawerComponent {
  protected open = false;

  protected readonly webApis = [
    'Common',
    'Audio',
    'Canvas',
    'Geolocation',
    'MIDI',
    'Workers',
  ];

  protected readonly taigaFamilyProducts = [
    'Taiga-UI',
    'ng-event-plugins',
    'ng-polymorpheus',
    'ng-dompurify',
  ];

  protected toggle(open: boolean): void {
    this.open = open;
  }
}
