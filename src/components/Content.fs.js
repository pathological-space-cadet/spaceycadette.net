import { Record } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Types.js";
import { record_type, list_type, string_type } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Reflection.js";
import { getOptionFromPath } from "./Utils.fs.js";
import { singleton, forAll, map as map_1, ofArray } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/List.js";
import { bind, map } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Option.js";
import { reactApi, reactElement } from "./components/.fable/Feliz.1.32.0/Interop.fs.js";
import { createObj } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Util.js";
import { LinkProps, Link } from "./Gatsby.fs.js";
import { append } from "./.fable/fable-library.3.0.0-nagareyama-rc-008/Array.js";

export class ContentPreview extends Record {
    constructor(Title, PublishedAt, Tags, Excerpt, Path) {
        super();
        this.Title = Title;
        this.PublishedAt = PublishedAt;
        this.Tags = Tags;
        this.Excerpt = Excerpt;
        this.Path = Path;
    }
}

export function ContentPreview$reflection() {
    return record_type("ContentList.ContentPreview", [], ContentPreview, () => [["Title", string_type], ["PublishedAt", string_type], ["Tags", list_type(string_type)], ["Excerpt", string_type], ["Path", string_type]]);
}

export class Content extends Record {
    constructor(Title, PublishedAt, Tags, Html) {
        super();
        this.Title = Title;
        this.PublishedAt = PublishedAt;
        this.Tags = Tags;
        this.Html = Html;
    }
}

export function Content$reflection() {
    return record_type("ContentList.Content", [], Content, () => [["Title", string_type], ["PublishedAt", string_type], ["Tags", list_type(string_type)], ["Html", string_type]]);
}

export function ContentListView_extractContentPreviewData(cp) {
    const title = getOptionFromPath(["frontmatter", "title"], cp);
    const publishedAt = getOptionFromPath(["frontmatter", "publishedAt"], cp);
    const tags = getOptionFromPath(["frontmatter", "tags"], cp);
    const excerpt = getOptionFromPath(["excerpt"], cp);
    const path = getOptionFromPath(["fields", "slug"], cp);
    const matchValue = [title, publishedAt, tags, excerpt, path];
    let pattern_matching_result, e, p, pa, t, ts;
    if (matchValue[0] != null) {
        if (matchValue[1] != null) {
            if (matchValue[2] != null) {
                if (matchValue[3] != null) {
                    if (matchValue[4] != null) {
                        pattern_matching_result = 0;
                        e = matchValue[3];
                        p = matchValue[1];
                        pa = matchValue[4];
                        t = matchValue[0];
                        ts = matchValue[2];
                    }
                    else {
                        pattern_matching_result = 1;
                    }
                }
                else {
                    pattern_matching_result = 1;
                }
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return new ContentPreview(t, p, ofArray(ts), e, pa);
        }
        case 1: {
            return void 0;
        }
    }
}

export function ContentListView_extractContentListData(props) {
    const pathFromPropsToNode = ["data", "allMarkdownRemark", "nodes"];
    let option_5;
    let option_3;
    let option_1;
    const option = getOptionFromPath(pathFromPropsToNode, props);
    option_1 = map(ofArray, option);
    option_3 = map((list) => map_1(ContentListView_extractContentPreviewData, list), option_1);
    option_5 = bind((xs) => {
        if (forAll((option_2) => (option_2 != null), xs)) {
            return xs;
        }
        else {
            return void 0;
        }
    }, option_3);
    return map((list_1) => map_1((option_4) => option_4, list_1), option_5);
}

function ContentListView_contentListTagList(tags) {
    return map_1((arg00) => reactElement("li", {
        children: [arg00],
    }), tags);
}

function ContentListView_contentListItem(content) {
    let elems_1, xs, elems, value_2, value_5;
    const xs_1 = singleton((elems_1 = [reactElement("h2", {
        children: [content.Title],
    }), reactElement("h4", {
        children: [content.PublishedAt],
    }), (xs = singleton((elems = ContentListView_contentListTagList(content.Tags), (value_2 = reactApi.Children.toArray(Array.from(elems)), ["children", value_2]))), reactElement("ul", createObj(xs))), reactElement("p", {
        children: [content.Excerpt],
    }), Link(new LinkProps(content.Path), singleton(reactElement("p", {
        children: ["(...)"],
    })))], (value_5 = reactApi.Children.toArray(Array.from(elems_1)), ["children", value_5])));
    return reactElement("article", createObj(xs_1));
}

function ContentListView_contentList(content) {
    return map_1(ContentListView_contentListItem, content);
}

function ContentListView_contentListView(content) {
    let xs, elems, value_1;
    if (content == null) {
        return null;
    }
    else {
        const c = content;
        const children = ofArray([reactElement("h1", {
            children: ["List of Articles"],
        }), (xs = singleton((elems = ContentListView_contentList(c), (value_1 = reactApi.Children.toArray(Array.from(elems)), ["children", value_1]))), reactElement("ul", createObj(xs)))]);
        return reactElement("main", {
            children: reactApi.Children.toArray(Array.from(children)),
        });
    }
}

export const ContentListView_ContentListView = (arg) => {
    let content;
    content = ContentListView_extractContentListData(arg);
    return ContentListView_contentListView(content);
};

function ContentView_extractContentData(props) {
    const pathFromPropsToNode = ["data", "allMarkdownRemark", "nodes", "0"];
    const title = getOptionFromPath(append(pathFromPropsToNode, ["frontmatter", "title"]), props);
    const publishedAt = getOptionFromPath(append(pathFromPropsToNode, ["frontmatter", "publishedAt"]), props);
    const tags = getOptionFromPath(append(pathFromPropsToNode, ["frontmatter", "tags"]), props);
    const html = getOptionFromPath(append(pathFromPropsToNode, ["html"]), props);
    const matchValue = [title, publishedAt, tags, html];
    let pattern_matching_result, html_1, p, t, ts;
    if (matchValue[0] != null) {
        if (matchValue[1] != null) {
            if (matchValue[2] != null) {
                if (matchValue[3] != null) {
                    pattern_matching_result = 0;
                    html_1 = matchValue[3];
                    p = matchValue[1];
                    t = matchValue[0];
                    ts = matchValue[2];
                }
                else {
                    pattern_matching_result = 1;
                }
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return new Content(t, p, ofArray(ts), html_1);
        }
        case 1: {
            return void 0;
        }
    }
}

function ContentView_contentTagList(tags) {
    return map_1((arg00) => reactElement("li", {
        children: [arg00],
    }), tags);
}

function ContentView_contentView(content) {
    let children, xs, value_2;
    if (content == null) {
        return null;
    }
    else {
        const c = content;
        const children_2 = ofArray([reactElement("h1", {
            children: [c.Title],
        }), reactElement("h4", {
            children: [c.PublishedAt],
        }), (children = ContentView_contentTagList(c.Tags), reactElement("ul", {
            children: reactApi.Children.toArray(Array.from(children)),
        })), (xs = singleton((value_2 = {
            __html: c.Html,
        }, ["dangerouslySetInnerHTML", value_2])), reactElement("article", createObj(xs)))]);
        return reactElement("main", {
            children: reactApi.Children.toArray(Array.from(children_2)),
        });
    }
}

export const ContentView_ContentView = (arg) => {
    let content;
    content = ContentView_extractContentData(arg);
    return ContentView_contentView(content);
};

