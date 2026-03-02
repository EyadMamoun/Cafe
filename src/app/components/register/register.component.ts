import { Component } from '@angular/core';
import { GenericInputComponent } from '../../shared/components/generic-input/generic-input.component';

@Component({
  selector: 'app-register',
  imports: [GenericInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
