import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles.css";
import { rawData } from "./raw-data";

import { BoolView } from "./view/bool-view";
import { NumberView } from "./view/number-view";
import { StringView } from "./view/string-view";
import { BoolControl } from "./control/bool-control";
import { FloatControl } from "./control/float-control";
import { Pointer } from "./pointer/pointer";
import { IntegerControl } from "./control/integer-control";
import { StringControl } from "./control/string-control";

var appContent = (<div>
  <BoolView control={new BoolControl(new Pointer(rawData, "isManualColumnSettings"))} />
  <br/>
  <NumberView control={new FloatControl(new Pointer(rawData.position, "x"))} />
  <br/>
  <NumberView control={new IntegerControl(new Pointer(rawData.position, "y"))} />
  <br/>
  <StringView control={new StringControl(new Pointer(rawData, "guid"))} />
</div>);

ReactDOM.render(appContent, document.getElementById("root"));