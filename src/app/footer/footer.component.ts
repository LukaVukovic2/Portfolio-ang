import { Component } from '@angular/core';
import { FooterIcon } from '../models/footer-icon.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerIcons: FooterIcon[] = [
    {
      class: 'fa-brands fa-linkedin-in fa-xl',
      url: 'https://linkedin.com/in/vukovicluka'
    },
    {
      class: 'fa-brands fa-github fa-xl',
      url: 'https://github.com/LukaVukovic2'
    },
    {
      class: 'fa-regular fa-envelope fa-xl',
      url: 'mailto:vukovicluka33@gmail.com'
    }
  ]
}
