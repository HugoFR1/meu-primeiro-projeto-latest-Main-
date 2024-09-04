import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Hugo Fraga';
  public age = 22;
  public condition = this.age < 1 ? "Teste1" : "Teste2"
  public isDisabled = true;
  public srcValue =
  'https://vidafullstack.com.br/wp-content/uploads/2022/04/Aprenda-o-que-e-Databinding-com-Angular-1080x675.jpg';

  public isTextDecoration = this.age >= 22 ? 'underline' : 'none';
  public sum(val1: number, val2: number) {
    return val1 + val2;
  }

}
