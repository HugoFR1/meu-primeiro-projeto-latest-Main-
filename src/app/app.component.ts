import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from './components/signals/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent, SignalsComponent],

  template: `
  <!-- <app-template-binding/> -->
  <!--router-outlet></!--router-outlet> -->
  <!-- <app-template-variables/> -->
  <!-- <app-template-control-flow /> -->

  <h1>Curso de angular</h1>
  <app-signals />
`,
})
export class AppComponent {
}

