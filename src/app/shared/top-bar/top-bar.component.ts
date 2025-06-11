import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  isMenuOpen = false;
  isSubMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) this.isSubMenuOpen = false;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.isSubMenuOpen = false;
  }

  toggleSubMenu(): void {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  // Ferme le menu si on clique à l'extérieur
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.burger-menu') && !target.closest('.mobile-menu')) {
      this.closeMenu();
    }
  }

  // Adapte le menu si on redimensionne la fenêtre
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth > 992 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
