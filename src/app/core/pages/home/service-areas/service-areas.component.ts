// service-areas.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-service-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-areas.component.html',
  styleUrls: ['./service-areas.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        query('.department-card, .map-container', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('pulseHighlight', [
      transition('* => *', [
        animate('1.5s ease-in-out',
          style({ transform: 'scale(1.05)' }))
      ])
    ])
  ]
})
export class ServiceAreasComponent {
  departments = [
    {
      name: "Bouches-du-Rhône",
      cities: ["Marseille", "Aix-en-Provence", "Cassis"],
      coordinates: { x: '65%', y: '70%' },
      active: true
    },
    {
      name: "Var",
      cities: ["Toulon", "Hyères", "Fréjus", "Saint-Tropez"],
      coordinates: { x: '75%', y: '75%' },
      active: true
    },
    {
      name: "Alpes-Maritimes",
      cities: ["Cannes", "Antibes", "Nice"],
      coordinates: { x: '85%', y: '60%' },
      active: false
    },
    {
      name: "Vaucluse",
      cities: ["Avignon", "Carpentras"],
      coordinates: { x: '70%', y: '60%' },
      active: false
    },
    {
      name: "Alpes-de-Haute-Provence",
      cities: ["Digne-les-Bains", "Manosque", "Gap"],
      coordinates: { x: '75%', y: '45%' },
      active: false
    }
  ];

  selectedDepartment: any = null;
  guaranteeText = "Intervention garantie sous 48h max.";

  toggleDepartment(department: any) {
    this.departments.forEach(d => d.active = false);
    department.active = true;
    this.selectedDepartment = department;
  }

  getTransformStyle(x: string, y: string) {
    return {
      'transform': `translate(${x}, ${y})`
    };
  }
}
