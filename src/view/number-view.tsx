import * as React from "react";
import { observer } from "mobx-react";
import { FloatControl } from "../control/float-control";
import { BaseView } from "./base-view";

@observer
export class NumberView extends BaseView<number, FloatControl> {
  rerender(value: number, action: FloatControl) {
    return (
      <span>
        <input type="text" value={value} />
        <span onClick={action.up}>+</span>
        <span onClick={action.down}>-</span>
      </span>
    );
  }
}