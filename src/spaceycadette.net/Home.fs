// fsharplint:disable RecordFieldNames
module Home

open Feliz
open Fable.Core.JsInterop

[<ReactComponent>]
let HomeMenu () =
    Html.ul [ prop.className "home-menu"
              prop.children [ Html.li [ Html.a [ prop.href "/articles"
                                                 prop.text "Articles" ] ]
                              Html.li [ Html.a [ prop.href "/stories"
                                                 prop.text "Stories" ] ] ] ]

[<ReactComponent>]
let Home (props: obj) =
    let home =
        (Html.main [ Html.h1 "Spacey Cadette"
                     HomeMenu() ])
        |> Seq.singleton

    Layout.Layout !!{| children = home |}
