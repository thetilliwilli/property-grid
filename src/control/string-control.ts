import { BaseControl } from "./base-control";
import { action } from "mobx";

export class StringControl extends BaseControl<string>{
  @action.bound
  public change(value: string) { return this.set(value); }
}