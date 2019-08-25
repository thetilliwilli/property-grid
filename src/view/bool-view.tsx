import * as React from "react";
import { observer } from "mobx-react";
import { BoolControl } from "../control/bool-control";
import { BaseView } from "./base-view";

@observer
export class BoolView extends BaseView<boolean, BoolControl> {
  rerender(value: boolean, action: BoolControl) {
    return <span onClick={action.invert}>{""+value}</span>
  }
}