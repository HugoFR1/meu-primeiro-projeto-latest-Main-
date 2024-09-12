import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss',
  styles:[],
})
export class NewComponent  {
  public name = 'New Component';

}
