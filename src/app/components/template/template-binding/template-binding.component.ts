import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule, NgClass],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Hugo Fraga';
  public age = 22;
  public condition = this.age > 1 ? 'Teste1' : 'Teste2';

  public isDisabled = true;
  public srcValue =
    'https://vidafullstack.com.br/wp-content/uploads/2022/04/Aprenda-o-que-e-Databinding-com-Angular-1080x675.jpg';

  public isTextDecoration = this.age >= 22 ? 'underline' : 'none';

 public sum() {
  return this.age++;
 }

 public sub() {
  return this.age--;
 }

public onKeyDown(event: Event) {
  return console.log(event);
}
public onMouseMove(event: MouseEvent) {
  return console.log({
    clientX: event.clientX,
    clientY: event.clientY,
  });
}

}


