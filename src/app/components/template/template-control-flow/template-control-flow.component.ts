import { AsyncPipe, CommonModule, NgFor, NgIf, NgIfContext, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue = true;
  public switchCondition = 'A';

  public itens = [{ name: 'Hugo Fraga' }];
  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));
name: any;

public trackByFn(index: number){
  return index;
}

public addNewName(value: string){
  return this.itens.push({ name: value });
  }
}
