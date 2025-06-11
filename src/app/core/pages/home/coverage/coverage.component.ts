import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coverage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coverage.component.html',
  styleUrl: './coverage.component.scss'
})
export class CoverageComponent {
  departments = [
    {
      name: 'Bouches-du-Rhône',
      cities: ['Marseille', 'Aix-en-Provence', 'Cassis', 'Arles']
    },
    // ... autres départements
  ];
}
