import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Product } from '../../types/products.type';
import { MenuOptionComponent } from '../../shared/components/menu-option/menu-option.component';

@Component({
  selector: 'app-dessert-menu',
  imports: [MenuOptionComponent],
  templateUrl: './dessert-menu.component.html',
  styleUrl: './dessert-menu.component.scss',
})
export class DessertMenuComponent {
  dessert: Product[] = [
    {
      id: 5,
      productImg: 'assets/Images/Classic_Tiramisu.png',
      productName: 'Classic Tiramisu',
      productDescription:
        'Espresso-soaked ladyfingers with mascarpone cream and cocoa.',
      productPrice: 220,
    },
    {
      id: 6,
      productImg: 'assets/Images/Classic_Tiramisu.png',
      productName: 'Classic Tiramisu',
      productDescription:
        'Espresso-soaked ladyfingers with mascarpone cream and cocoa.',
      productPrice: 220,
    },
    {
      id: 7,
      productImg: 'assets/Images/Classic_Tiramisu.png',
      productName: 'Classic Tiramisu',
      productDescription:
        'Espresso-soaked ladyfingers with mascarpone cream and cocoa.',
      productPrice: 220,
    },
    {
      id: 8,
      productImg: 'assets/Images/Classic_Tiramisu.png',
      productName: 'Classic Tiramisu',
      productDescription:
        'Espresso-soaked ladyfingers with mascarpone cream and cocoa.',
      productPrice: 220,
    },
  ];
}
