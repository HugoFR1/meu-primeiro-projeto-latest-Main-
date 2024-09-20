import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent],

  template: `
  <!-- <app-template-binding/> -->
  <!--router-outlet></!--router-outlet> -->
  <!-- <app-template-variables/> -->
  <h1>Curso de angular</h1>

  <app-template-control-flow />

`,

})
export class AppComponent {
}

