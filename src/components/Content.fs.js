import { Record } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Types.js";
import { record_type, array_type, class_type, string_type } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Reflection.js";
import { reactElement } from "./components/.fable/Feliz.1.32.0/Interop.fs.js";

export class ContentPreview extends Record {
    constructor(title, publishedAt, tags, excerpt) {
        super();
        this.title = title;
        this.publishedAt = publishedAt;
        this.tags = tags;
        this.excerpt = excerpt;
    }
}

export function ContentPreview$reflection() {
    return record_type("ContentList.ContentPreview", [], ContentPreview, () => [["title", string_type], ["publishedAt", class_type("Fable.Core.JS.Date")], ["tags", array_type(string_type)], ["excerpt", string_type]]);
}

export class Content extends Record {
    constructor(title, publishedAt, tags, content) {
        super();
        this.title = title;
        this.publishedAt = publishedAt;
        this.tags = tags;
        this.content = content;
    }
}

export function Content$reflection() {
    return record_type("ContentList.Content", [], Content, () => [["title", string_type], ["publishedAt", class_type("Fable.Core.JS.Date")], ["tags", array_type(string_type)], ["content", string_type]]);
}

export function ContentListItem() {
    return reactElement("article", {});
}

export function ContentListView() {
    return reactElement("main", {});
}

export function ContentView() {
    return reactElement("main", {});
}

