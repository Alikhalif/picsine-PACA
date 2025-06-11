import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-urgency-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="urgence-bar">
      <div class="container">
        <p>🚨 <strong>Piscine qui fuit ?</strong> Ne perdez pas d'eau et d'argent !</p>
        <a href="tel:+336XXXXXXXX" class="btn btn-small">
          <i class="pi pi-phone"></i> Appelez un expert
        </a>
      </div>
    </div>
  `,
  styles: [`
    // urgency-bar.component.scss
    @import '../../../../../assets/scss/variables';

    .urgence-bar {
      background: $secondary;
      color: white;
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      p {
        margin: 0;
        font-weight: 600;
        font-size: 1.1rem;
      }

      .btn-small {
        padding: 0.6rem 1.4rem;
        font-size: 0.95rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: $border-radius;
        color: white;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: $transition;

        &:hover {
          background: rgba(0, 0, 0, 0.3);
        }
      }
    }

    @media (max-width: 768px) {
      .urgence-bar {
        .container {
          flex-direction: column;
          gap: 0.7rem;
          text-align: center;
        }

        .btn-small {
          width: 100%;
          justify-content: center;
        }
      }
    }
  `],
  templateUrl: './urgency-bar.component.html',
  styleUrl: './urgency-bar.component.scss'
})
export class UrgencyBarComponent {

}
