import { observable } from "mobx"
import { IPointer } from "../pointer/pointer";


export class BaseControl<TValue> {

  @observable
  public value: TValue;

  private pointer: IPointer<TValue>;

  protected set(value: TValue) { this.pointer.value = value; this.value = value; }

  constructor(pointer: IPointer<TValue>) {
    this.pointer = pointer;
    this.value = pointer.value;
  }

}