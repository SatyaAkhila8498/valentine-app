import { Routes } from '@angular/router';
import { AskValentineComponent } from './pages/ask-valentine/ask-valentine.component';
import { HappyValentineComponent } from './pages/happy-valentine/happy-valentine.component';

export const routes: Routes = [
  { path: '', component: AskValentineComponent },
  { path: 'valentine', component: HappyValentineComponent },
];
