import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  animations: [
    trigger('reviewAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger('100ms', [
            animate('600ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('starAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('500ms 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class TestimonialsComponent {
  reviews = [
    {
      id: 1,
      content: `Excellente prestation, fuite localisée en moins de 30 minutes, réparée dans la journée. Très sérieux et professionnel.`,
      author: 'Céline G.',
      location: 'Cassis',
      rating: 5,
      date: '15 mai 2024'
    },
    {
      id: 2,
      content: `Nous avions 3 cm de perte d'eau par jour. Ils ont trouvé un micro trou dans une canalisation enterrée que personne ne trouvait. Bravo.`,
      author: 'Nicolas M.',
      location: 'Saint-Tropez',
      rating: 5,
      date: '2 juin 2024'
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
