import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { DetectionMethodsComponent } from './core/pages/home/detection-methods/detection-methods.component';
import { TargetedRepairsComponent } from './core/pages/home/targeted-repairs/targeted-repairs.component';
import { PreventiveMaintenanceComponent } from './core/pages/home/preventive-maintenance/preventive-maintenance.component';
import { ServiceAreasComponent } from './core/pages/home/service-areas/service-areas.component';
import { PricingDiagnosticComponent } from './core/pages/home/pricing-diagnostic/pricing-diagnostic.component';
import { UrgencyBarComponent } from './core/pages/home/urgency-bar/urgency-bar.component';
import { TestimonialsComponent } from './core/pages/home/testimonials/testimonials.component';
import { ContactComponent } from './core/pages/home/contact/contact.component';
import { FinalCtaComponent } from './core/pages/home/final-cta/final-cta.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/pages/home/home.component').then(m => m.HomeComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { animation: 'home' } },
      { path: 'detection', component: DetectionMethodsComponent, data: { animation: 'detection' } },
      { path: 'repairs', component: TargetedRepairsComponent, data: { animation: 'repairs' } },

      { path: 'maintenance', component: PreventiveMaintenanceComponent, data: { animation: 'maintenance' } },
      { path: 'service', component: ServiceAreasComponent, data: { animation: 'service' } },
      { path: 'pricing', component: PricingDiagnosticComponent, data: { animation: 'pricing' } },

      { path: 'urgency', component: UrgencyBarComponent, data: { animation: 'urgency' } },
      { path: 'testimonials', component: TestimonialsComponent, data: { animation: 'testimonials' } },
      { path: 'contact', component: ContactComponent, data: { animation: 'contact' } },
      { path: 'cta', component: FinalCtaComponent, data: { animation: 'cta' } },

    ]
  },

  // Redirects
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];
