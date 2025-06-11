import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-pricing-diagnostic',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pricing-diagnostic.component.html',
  styleUrls: ['./pricing-diagnostic.component.scss'],
  animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.price-card, form', [
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
        style({ transform: 'scale(0.98)' }),
        animate('800ms ease-in-out',
          style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class PricingDiagnosticComponent {
  priceItems = [
    {
      service: "Diagnostic complet + rapport",
      price: "189 € TTC",
      description: "Localisation précise de la fuite avec rapport détaillé",
      popular: true
    },
    {
      service: "Réparation tuyau PVC",
      price: "90 € TTC",
      description: "Soudure ou remplacement de section"
    },
    {
      service: "Soudure liner",
      price: "140 € TTC",
      description: "Réparation étanche sans vidange"
    },
    {
      service: "Reprise étanchéité",
      price: "Sur devis",
      description: "Skimmer, bonde de fond ou buses"
    }
  ];

  poolTypes = ['Liner', 'Coque', 'Béton', 'Carrelage', 'Autre'];
  formSubmitted = false;
  quoteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.quoteForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      problem: ['', [Validators.required]],
      poolType: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      photo: [null]
    });
  }

  onSubmit() {
    if (this.quoteForm.valid) {
      this.formSubmitted = true;
      // Form submission logic would go here
      console.log('Form submitted:', this.quoteForm.value);
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.quoteForm.patchValue({ photo: file });
    }
  }
}
