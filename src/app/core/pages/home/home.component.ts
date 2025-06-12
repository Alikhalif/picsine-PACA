import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { UrgencyBarComponent } from "./urgency-bar/urgency-bar.component";
import { MethodsComponent } from "./methods/methods.component";
import { CoverageComponent } from "./coverage/coverage.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { FinalCtaComponent } from "./final-cta/final-cta.component";
import { DetectionMethodsComponent } from "./detection-methods/detection-methods.component";
import { TargetedRepairsComponent } from "./targeted-repairs/targeted-repairs.component";
import { PreventiveMaintenanceComponent } from "./preventive-maintenance/preventive-maintenance.component";
import { ServiceAreasComponent } from "./service-areas/service-areas.component";
import { PricingDiagnosticComponent } from "./pricing-diagnostic/pricing-diagnostic.component";
import { ContactComponent } from "./contact/contact.component";

import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CommonModule, UrgencyBarComponent, MethodsComponent, CoverageComponent, TestimonialsComponent, FinalCtaComponent, DetectionMethodsComponent, TargetedRepairsComponent, PreventiveMaintenanceComponent, ServiceAreasComponent, PricingDiagnosticComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        query('.section-component', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger('100ms', [
            animate('600ms cubic-bezier(0.4, 0, 0.2, 1)',
            style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('scrollAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger('100ms', [
            animate('500ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent {
  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);

  sections = [
    'hero',
    'methodes-detection',
    'reparations-ciblees',
    'maintenance-preventive',
    'zones-intervention',
    'tarifs-diagnostic',
    'urgence',
    'avis-clients',
    'contact'
  ];

  currentSection = 'hero';

  ngOnInit() {
    this.router.events.subscribe(() => {
      const fragment = this.router.url.split('#')[1];
      if (fragment) {
        this.currentSection = fragment;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.pageYOffset;

    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
          this.currentSection = section;
          history.replaceState(null, '', `#${section}`);
          break;
        }
      }
    }
  }

  scrollTo(section: string) {
    this.currentSection = section;
    this.viewportScroller.scrollToAnchor(section);
  }
}
