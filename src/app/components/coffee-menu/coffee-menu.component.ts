import { Component } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../types/products.type';

@Component({
  selector: 'app-coffee-menu',
  imports: [ProductCardComponent],
  templateUrl: './coffee-menu.component.html',
  styleUrl: './coffee-menu.component.scss',
})
export class CoffeeMenuComponent {
  hotCoffee: Product[] = [
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.jpg',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup trr rgesvegves.',
      productPrice: 70,
    },
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.jpg',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup trr rgesvegves.',
      productPrice: 70,
    },
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.jpg',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup trr rgesvegves.',
      productPrice: 70,
    },
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.jpg',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup trr rgesvegves.',
      productPrice: 70,
    },
  ];
  isHotDrinks: boolean = true;
  isColdDrinks: boolean = false;

  viewHotDrinks() {
    this.isHotDrinks = true;
    this.isColdDrinks = false;
  }

  viewColdDrinks() {
    this.isHotDrinks = false;
    this.isColdDrinks = true;
  }
}
