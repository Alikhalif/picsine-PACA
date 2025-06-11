import { Component } from '@angular/core';
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CommonModule, UrgencyBarComponent, MethodsComponent, CoverageComponent, TestimonialsComponent, FinalCtaComponent, DetectionMethodsComponent, TargetedRepairsComponent, PreventiveMaintenanceComponent, ServiceAreasComponent, PricingDiagnosticComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  template: `
    <!-- <app-hero></app-hero>
    <h2>Welcome!</h2> -->
  `,
})
export class HomeComponent {

}
