import { join } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/String.js";
import { reactElement, reactApi } from "./components/.fable/Feliz.1.32.0/Interop.fs.js";
import { ofArray } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/List.js";
import { createObj } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Util.js";

export function Layout(input) {
    let value, elems, value_1;
    const xs = ofArray([(value = join(" ", ["layout"]), ["className", value]), (elems = input.children, (value_1 = reactApi.Children.toArray(Array.from(elems)), ["children", value_1]))]);
    return reactElement("div", createObj(xs));
}

