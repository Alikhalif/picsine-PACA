import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { ApiService } from '../../../../service/api/api.service';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pricing-diagnostic',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Toast],
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

  constructor(private fb: FormBuilder,
    private api: ApiService,
    private messageService: MessageService
  ) {
    this.quoteForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      problem: ['', [Validators.required]],
      poolType: ['', [Validators.required]],
      phone: ['', []],
      photo: [null]
    });
  }

  onSubmit() {
    if (this.quoteForm.valid) {
      this.api.submitForm(this.quoteForm.value).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Message envoyé avec succès !',
          });
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Une erreur est survenue : ' + err.message,
          });
        },
      });
      // this.formSubmitted = true;
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.quoteForm.patchValue({ photo: file });
    }
  }
}
