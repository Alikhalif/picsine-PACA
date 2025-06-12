import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, inject } from '@angular/core';
import { NavigationService } from '../../service/navigation.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class TopBarComponent {
  private router = inject(Router);
  private navService = inject(NavigationService);

  isMenuOpen = false;
  isSubMenuOpen = false;
  isScrolled = false;

  // Listen for scroll events to add background blur effect
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleBodyScroll();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.isSubMenuOpen = false;
    this.toggleBodyScroll();
  }

  toggleSubMenu(): void {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  private toggleBodyScroll(): void {
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  navigateAndClose(route: string): void {
    this.router.navigate([route]);
    this.closeMenu();
  }

  navigateTo(section: string) {
    this.navService.navigateTo(section);
    this.closeMenu();
  }
}
