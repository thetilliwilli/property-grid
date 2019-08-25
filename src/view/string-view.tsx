import * as React from "react";
import { BaseView } from "./base-view";
import { StringControl } from "../control/string-control";
import { observer } from "mobx-react";

@observer
export class StringView extends BaseView<string, StringControl>{
  rerender(value: string, action: StringControl) {
    return <input type="text" value={value} onChange={event=>action.change(event.target.value)} />
  }
}