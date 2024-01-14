import { ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() title!: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() clearable: boolean = false;
  @Input() disabled: boolean = false;
  @Input() public value: string | null = '';

  constructor(private cdRef: ChangeDetectorRef) {}

  private onChange: any = () => {};
  public onTouch: any = () => {};

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public writeValue(checked: string) {
    this.value = checked;
    this.cdRef.detectChanges();
  }

  public onModelChange(e: string) {
    this.value = e;
    this.onChange(e);
  }

  public onClear(): void {
    this.value = null;
    this.onChange(null);
  }
}
