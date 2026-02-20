import { Component } from '@angular/core';
import { DetailsSectionComponent } from '../../shared/components/details-section/details-section.component';

@Component({
  selector: 'app-about',
  imports: [DetailsSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
