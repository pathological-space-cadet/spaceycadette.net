// fsharplint:disable RecordFieldNames
module ContentList

open Fable.Core.JS
open Feliz

type ContentPreview =
    { title: string
      publishedAt: Date
      tags: string array
      excerpt: string }

type Content =
    { title: string
      publishedAt: Date
      tags: string array
      content: string }

[<ReactComponent>]
let ContentListItem () = Html.article []

[<ReactComponent>]
let ContentListView () = Html.main []

[<ReactComponent>]
let ContentView () = Html.main []
