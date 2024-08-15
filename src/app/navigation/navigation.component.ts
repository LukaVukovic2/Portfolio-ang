import { Component, OnInit } from '@angular/core';
import { NavItem } from '../models/nav-item.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  navItems: NavItem[] = [
    { label: 'About', route: '#about' },
    { label: 'Projects', route: '#projects'},
    { label: 'Contact', route: '#contact' },
  ];
}
