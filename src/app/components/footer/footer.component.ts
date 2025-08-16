import { Component } from '@angular/core';
import { FooterDetails } from '../../types/footer.type';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerContent: FooterDetails[];

  constructor() {
    this.footerContent = [
      {
        headline: 'PRIVACY',
        content: ['Terms of use', 'Privacy policy', 'Conditions'],
      },
      {
        headline: 'SERVICES',
        content: ['Shop', 'Orders', 'Menu'],
      },
      {
        headline: 'ABOUT US',
        content: ['Find a location', 'About us', 'Our story'],
      },
      {
        headline: 'INFORMATION',
        content: ['Sets & pricing', 'Set your products', 'Jobs'],
      },
    ];
  }
}
