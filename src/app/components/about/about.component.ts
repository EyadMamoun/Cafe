import { Component } from '@angular/core';
import { DetailsSectionComponent } from '../../shared/components/details-section/details-section.component';

@Component({
  selector: 'app-about',
  imports: [DetailsSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  ourStory: string[] = [];
  ourMission: string[] = [];
  ourVision: string[] = [];

  constructor() {
    this.ourStory = [
      'Founded in 1975 in Toronto, Canada, Second Cup started as a small kiosk in a shopping mall selling whole bean coffee.',
      'Throughout the 1980s, the brand expanded rapidly across Canada, building a network of cafés focused on quality brewed coffee and specialty blends.',
      'In the 1990s, as café culture grew North America-wide, Second Cup expanded beyond beans to serve espresso drinks, blender beverages, iced teas, and more.',
      'During the 2000s, Second Cup became a staple café destination — highlighting the cafés as gathering places and celebrating coffee craftsmanship.',
      'In 2015, the brand refreshed itself with a redesigned café concept and updated menus to match evolving tastes.',
      'Over the years, Second Cup has also grown internationally beyond Canada, opening cafés in regions like the Middle East and Europe.',
    ];

    this.ourMission = [
      'The brand’s mission focuses on growth through innovation and dedication to excellence across all aspects of the café experience — from sourcing to service.',
      'Coffee quality sits at the core of the business: carefully selected beans, ethical sourcing, and a passion for delivering consistently great coffee.',
      'Second Cup continually evolves its offerings and café environments — embracing new beverages, food items, and memorable experiences to enrich coffee culture for guests.',
    ];

    this.ourVision = [
      'The global profile states the vision as striving to be the world’s premier sustainable café brand, reflecting a focus on responsible growth and long-term environmental stewardship.',
      'As a Canadian legacy brand, Second Cup envisions being the café of choice for coffee lovers across regions — balancing premium experiences with sustainability values.',
      'This vision is backed by commitments to fair trade, responsible sourcing, certified coffee, and sustainable practices that support farmers and the planet.',
    ];
  }
}
