import { BaseControl } from "./base-control";
import { IPointer } from "../pointer/pointer";

export class BoolControl extends BaseControl<boolean> {
  constructor(ptr: IPointer<boolean>) {
    super(ptr);
    this.false = this.false.bind(this);
    this.true = this.true.bind(this);
    this.invert = this.invert.bind(this);
  }

  public false() { this.set(false); }
  public true() { this.set(true); }
  public invert() { this.set(!this.value); }
}