import { Component, OnInit, ElementRef, OnDestroy, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { MatFormFieldControl } from '@angular/material';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: NumberFieldComponent }
  ],
  host: {
    '[class.number-input-floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy'
  }
})
export class NumberFieldComponent
  implements MatFormFieldControl<number>, OnDestroy {
  control: FormControl;
  stateChanges = new Subject<void>();
  focused = false;
  ngControl = null;
  errorState = false;
  controlType = 'number-input';
  id = `number-input-${NumberFieldComponent.nextId++}`;
  describedBy = '';

  get empty() {
    return !this.control.value;
  }

  get shouldLabelFloat() {
    return true;
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.control.disable() : this.control.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): number | null {
    return this.control.value;
  }
  set value(value: number | null) {
    this.control.setValue(value);
    this.stateChanges.next();
  }

  @Input() step = 1;
  @Input() size = 9;

  private _max: number;
  private _min: number;
  @Input()
  get max(): number | null {
    return this._max;
  }
  set max(value: number | null) {
    this._max = value;
    this.setValidators();
    this.stateChanges.next();
  }

  @Input()
  get min(): number | null {
    return this._min;
  }
  set min(value: number | null) {
    this._min = value;
    this.setValidators();
    this.stateChanges.next();
  }

  constructor(
    fb: FormBuilder,
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>
  ) {
    this.control = fb.control('');

    fm.monitor(elRef, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input')!.focus();
    }
  }

  get normalizedValue() {
    return this.value || 0;
  }

  increase() {
    let result = this.normalizedValue + +this.step;

    if (this.max || this.max === 0) {
      result = Math.min(result, this.max);
    }

    this.value = result;
  }

  decrease() {
    let result = this.normalizedValue - +this.step;

    if (this.min || this.min === 0) {
      result = Math.max(result, this.min);
    }

    this.value = result;
  }

  get maxLimitReached() {
    if (!this.max && this.max !== 0) {
      return false;
    }

    return this.value >= this.max;
  }

  get minLimitReached() {
    if (!this.min && this.min !== 0) {
      return false;
    }

    return this.value <= this.min;
  }

  setValidators() {
    const validators = [];
    if (this.max || this.max === 0) {
      validators.push(Validators.max(this.max));
    }

    if (this.min || this.min === 0) {
      validators.push(Validators.max(this.min));
    }

    this.control.setValidators(validators);
  }
}
