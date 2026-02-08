import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-valentine',
  standalone: true,
  imports: [],
  templateUrl: './ask-valentine.component.html',
  styleUrl: './ask-valentine.component.css'
})
export class AskValentineComponent {
  noLeft = 0;
  noTop = 0;

  constructor(private router: Router) {}
  goYes() {
    this.router.navigate(['/valentine']);
  }

  moveNo() {
    this.noLeft = Math.random() * 200;
    this.noTop = Math.random() * 200;
  }
}
