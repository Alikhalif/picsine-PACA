import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-preventive-maintenance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preventive-maintenance.component.html',
  styleUrl: './preventive-maintenance.component.scss',
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        query('.service-card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('pulse', [
      transition(':enter', [
        style({ transform: 'scale(0.95)' }),
        animate('600ms 200ms ease-out',
          style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class PreventiveMaintenanceComponent {
  services = [
    {
      title: "Inspection annuelle",
      description: "Vérification complète du réseau hydraulique",
      icon: "pi pi-search-plus",
      image: "assets/images/maintenance/inspection-annuelle.png",
      frequency: "Annuelle"
    },
    {
      title: "Contrôle de pression",
      description: "Test du système de filtration et canalisations",
      icon: "fas fa-tachometer-alt",
      image: "assets/images/maintenance/pressure-check.png",
      frequency: "Saisonnière"
    },
    {
      title: "Étanchéité",
      items: ["Skimmer", "Bonde de fond", "Buses"],
      icon: "pi pi-shield",
      image: "assets/images/maintenance/sealing.png",
      frequency: "Saisonnière"
    },
    {
      title: "Nettoyage complet",
      description: "Bassin et local technique",
      icon: "fas fa-broom",
      image: "assets/images/maintenance/cleaning.png",
      frequency: "Mensuelle"
    },
    {
      title: "Hivernage",
      description: "Préparation pour la saison hivernale",
      icon: "fas fa-snowflake",
      image: "assets/images/maintenance/winterizing.png",
      frequency: "Annuelle"
    }
  ];

  benefits = [
    "Prolonge la durée de vie de votre piscine",
    "Réduit les risques de pannes coûteuses",
    "Maintiens une eau saine et équilibrée",
    "Préserve l'étanchéité de la structure",
    "Optimise les performances du système"
  ];
}
