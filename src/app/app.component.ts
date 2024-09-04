import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewComponent, TemplateBindingComponent],
  styles:[
    `
      h1 {
        color: red;
      }
    `],
  template: `
  <!--router-outlet></!--router-outlet> -->
  <h1>Curso de angular</h1>
  <app-template-binding/>
 

  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
//
