import { reactApi, reactElement } from "./components/.fable/Feliz.1.32.0/Interop.fs.js";
import { createObj } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Util.js";
import { singleton, ofArray } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/List.js";

export function HomeMenu() {
    let elems, children, children_2, value_10;
    const xs_2 = ofArray([["className", "home-menu"], (elems = [(children = singleton(reactElement("a", createObj(ofArray([["href", "/articles"], ["children", "Articles"]])))), reactElement("li", {
        children: reactApi.Children.toArray(Array.from(children)),
    })), (children_2 = singleton(reactElement("a", createObj(ofArray([["href", "/stories"], ["children", "Stories"]])))), reactElement("li", {
        children: reactApi.Children.toArray(Array.from(children_2)),
    }))], (value_10 = reactApi.Children.toArray(Array.from(elems)), ["children", value_10]))]);
    return reactElement("ul", createObj(xs_2));
}

export function Home() {
    const children = ofArray([reactElement("h1", {
        children: ["Spacey Cadette"],
    }), HomeMenu()]);
    return reactElement("main", {
        children: reactApi.Children.toArray(Array.from(children)),
    });
}

