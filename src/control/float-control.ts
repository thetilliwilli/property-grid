import { BaseControl } from "./base-control";
import { action } from "mobx";

export class FloatControl extends BaseControl<number>
{
  protected delta = 0.1;

  @action.bound
  public up() { this.set(this.value + this.delta) }

  @action.bound
  public down() { this.set(this.value - this.delta) }
}