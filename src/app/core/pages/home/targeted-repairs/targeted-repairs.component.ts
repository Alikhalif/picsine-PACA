import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-targeted-repairs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targeted-repairs.component.html',
  styleUrl: './targeted-repairs.component.scss',
   animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.repair-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('400ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: 0 }),
        animate('500ms 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class TargetedRepairsComponent {
  repairs = [
    {
      title: "Réparation de liner",
      methods: ["Soudure à chaud", "Rustine spécifique"],
      icon: "fas fa-fire",
      image: "assets/images/repairs/liner-repair.png",
      warranty: true
    },
    {
      title: "Soudure & collage PVC",
      description: "Réseau hydraulique complet",
      icon: "fas fa-burn",
      image: "assets/images/repairs/pvc-repair.png",
      warranty: true
    },
    {
      title: "Reprise d'étanchéité",
      items: ["Skimmer", "Bonde de fond", "Buses"],
      icon: "pi pi-shield",
      image: "assets/images/repairs/sealing.png",
      warranty: true
    },
    {
      title: "Joints & brides",
      action: "Reprise ou remplacement",
      icon: "pi pi-cog",
      image: "assets/images/repairs/joints.png",
      warranty: true
    },
    {
      title: "Membrane armée",
      description: "Pour dégâts majeurs",
      icon: "fas fa-layer-group",
      image: "assets/images/repairs/membrane.png",
      warranty: true
    }
  ];

  warrantyDetails = {
    duration: "12 mois",
    coverage: "Toutes nos réparations sont garanties",
    icon: "pi pi-verified"
  };
}
