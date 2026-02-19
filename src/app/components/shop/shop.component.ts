import { Component } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../types/products.type';

@Component({
  selector: 'app-shop',
  imports: [ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  coffeeProducts: Product[] = [
    {
      id: 1,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
    },
    {
      id: 2,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
    },
    {
      id: 3,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
    },
    {
      id: 4,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
    },
    {
      id: 5,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
    },
    {
      id: 6,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
    },
    {
      id: 7,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
    },
    {
      id: 8,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
    },
  ];
}
