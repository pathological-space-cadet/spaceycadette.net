import { Record } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Types.js";
import { record_type, string_type } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Reflection.js";
import * as react from "react";
import { Link as Link_1 } from "gatsby";

export class LinkProps extends Record {
    constructor(to) {
        super();
        this.to = to;
    }
}

export function LinkProps$reflection() {
    return record_type("Gatsby.LinkProps", [], LinkProps, () => [["to", string_type]]);
}

export function Link(props, elems) {
    return react.createElement(Link_1, props, ...elems);
}

