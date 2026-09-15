import { Component } from '@angular/core';
import { AppLayoutComponent } from './components/app-layout/app-layout';

@Component({
  imports: [AppLayoutComponent],
  selector: 'app-root',
  template: `<app-layout></app-layout>`,
})
export class App {}
