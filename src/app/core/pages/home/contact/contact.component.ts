import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { trigger, transition, style, animate, stagger, query, useAnimation } from '@angular/animations';
import { fadeInUp, zoomIn, fadeIn } from 'ng-animate';
import { ApiService } from '../../../../service/api/api.service';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Toast],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        useAnimation(fadeInUp, { params: { timing: 0.6 } })
      ])
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 0.5 } }))
    ])
  ]
})
export class ContactComponent {


  faqItems = [
    {
      question: 'Que faire si ma piscine perd de l\'eau ?',
      answer: 'Si vous constatez une perte d\'eau anormale dans votre piscine, contactez-nous immédiatement pour un diagnostic professionnel. En attendant, vous pouvez vérifier le niveau d\'eau pour mesurer la perte quotidienne.',
      expanded: false
    },
    {
      question: 'Quels sont vos horaires d\'intervention ?',
      answer: 'Nous intervenons du lundi au samedi de 8h à 20h. Les urgences sont traitées 24h/24.',
      expanded: false
    }
  ];

  contactForm: FormGroup;

  constructor(private fb: FormBuilder,
    private api: ApiService,
    private messageService: MessageService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', ],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  toggleFaq(index: number): void {
    this.faqItems[index].expanded = !this.faqItems[index].expanded;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {

      this.api.submitContact(this.contactForm.value).subscribe({
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
      // Handle form submission
      this.contactForm.reset();
    }
  }

  get phoneNumber(): string {
    return 'tel:+33612345678'; // Replace with your actual phone number
  }

  get whatsappLink(): string {
    return 'https://wa.me/33612345678?text=Bonjour,%20je%20suis%20intéressé%20par%20vos%20services'; // Replace with your actual number
  }
}
