import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-detection-methods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detection-methods.component.html',
  styleUrls: ['./detection-methods.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        query('.feature-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('300ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: 0 }),
        animate('400ms 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class DetectionMethodsComponent {
  poolTypes = [
    'Piscines enterrées (coque, liner, béton, carrelage)',
    'Réseaux hydrauliques enterrés ou visibles',
    'Locaux techniques'
  ];

  methods = [
    {
      icon: 'fas fa-compress-alt',
      title: 'Test de pression',
      description: 'Identifie les pertes dans les canalisations enterrées',
      image: 'assets/images/technicien-piscine.png'
    },
    {
      icon: 'pi pi-cloud',
      title: 'Gaz traceur',
      description: 'Injecté dans les tuyaux pour repérer la fuite',
      image: 'assets/images/gas-tracer.png'
    },
    {
      icon: 'pi pi-camera',
      title: 'Caméra thermique',
      description: 'Visualisation des variations de température liées à l\'humidité',
      image: 'assets/images/thermal-camera.png'
    },
    {
      icon: 'pi pi-volume-up',
      title: 'Détection acoustique',
      description: 'Écoute des fuites dans les canalisations ou sous le liner',
      image: 'assets/images/acoustic-detection.png'
    },
    {
      icon: 'pi pi-palette',
      title: 'Colorant fluorescéine',
      description: 'Repère les fissures et micro-fuites en zone visible',
      image: 'assets/images/dye-test.png'
    }
  ];

  reportFeatures = [
    { icon: 'pi pi-check-circle', text: 'Cause identifiée' },
    { icon: 'pi pi-wrench', text: 'Méthode utilisée' },
    { icon: 'pi pi-image', text: 'Photo / schéma de localisation' },
    { icon: 'pi pi-file', text: 'Devis de réparation (si nécessaire)' }
  ];
}
