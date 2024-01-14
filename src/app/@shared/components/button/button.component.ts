import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;
}
