import { Component } from '@angular/core';
import { Icon, Product } from '../../types/products.type';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  specialCoffee: Product[];
  specialDesserts: Product[];
  icons: Icon[];

  constructor(private readonly _router: Router) {
    this.specialCoffee = [
      {
        id: 1,
        productImg: 'assets/Images/Turkish_Coffee.jpg',
        productName: 'Turkish Coffee',
        productDescription: 'Finely ground coffee boiled and served in a cup.',
        productPrice: 70,
      },
      {
        id: 2,
        productImg: 'assets/Images/Latte.jpg',
        productName: 'Iced Spanish Latte',
        productDescription:
          'A Latin twist of rich espresso and special milk with a sweet finish.',
        productPrice: 165,
      },
      {
        id: 3,
        productImg: 'assets/Images/Salted_caramel.jpg',
        productName: 'Iced Salted Caramel',
        productDescription:
          'Caramel cream espresso with whipped cream and salted sugar.',
        productPrice: 180,
      },
      {
        id: 4,
        productImg: 'assets/Images/Filter_Coffee.jpg',
        productName: 'Filtered Coffee',
        productDescription:
          'Freshly brewed filtered coffee with a smooth, clean finish.',
        productPrice: 85,
      },
    ];

    this.specialDesserts = [
      {
        id: 5,
        productImg: 'assets/Images/Classic_Tiramisu.jpg',
        productName: 'Classic Tiramisu',
        productDescription:
          'Espresso-soaked ladyfingers with mascarpone cream and cocoa.',
        productPrice: 220,
      },
      {
        id: 6,
        productImg: 'assets/Images/Donuts.jpg',
        productName: 'Donuts',
        productDescription:
          'Golden, tender donut crafted with rich, sweet glaze.',
        productPrice: 145,
      },
      {
        id: 7,
        productImg: 'assets/Images/Cinnamon_Churros.jpg',
        productName: 'Cinnamon Churros',
        productDescription: 'Crispy churros coated in cinnamon sugar.',
        productPrice: 190,
      },
      {
        id: 8,
        productImg: 'assets/Images/Lotus_Cheesecake.jpg',
        productName: 'Lotus Cheesecake',
        productDescription:
          'Creamy cheesecake topped with Lotus biscuit crumble.',
        productPrice: 160,
      },
    ];

    this.icons = [
      {
        iconImgUrl: 'assets/Images/hot_coffee.png',
        iconDescription: 'Hot Coffee',
      },
      {
        iconImgUrl: 'assets/Images/ice_coffee.png',
        iconDescription: 'Cold Coffee',
      },
      {
        iconImgUrl: 'assets/Images/coffee_cup.png',
        iconDescription: 'Cup Coffee',
      },
      {
        iconImgUrl: 'assets/Images/Desserts.png',
        iconDescription: 'Dessert',
      },
    ];
  }

  navigateToShop() {
    this._router.navigateByUrl('/shop');
  }
}
