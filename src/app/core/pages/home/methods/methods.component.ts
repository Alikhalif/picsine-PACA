import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-methods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './methods.component.html',
  styleUrl: './methods.component.scss'
})
export class MethodsComponent {
  techniques = [
    {
      icon: 'pi-camera',
      title: 'Caméra thermique',
      description: 'Détection des variations de température...'
    },
    // ... autres méthodes
  ];
}
