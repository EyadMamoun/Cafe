import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-input',
  imports: [],
  templateUrl: './generic-input.component.html',
  styleUrl: './generic-input.component.scss',
})
export class GenericInputComponent {
  @Input() label: string = '';
  @Input() inputType: 'text' | 'number' | 'email' = 'text';
}
