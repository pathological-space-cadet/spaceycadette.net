import { path as path_1 } from "ramda";
import { some } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Option.js";

const path = path_1;

export function getOptionFromPath(p, o) {
    let x;
    const matchValue = path()(p)(o);
    if (x = matchValue, x == null) {
        const x_1 = matchValue;
        return void 0;
    }
    else {
        const x_2 = matchValue;
        return some(x_2);
    }
}

