// fsharplint:disable RecordFieldNames
module Home

open Feliz

[<ReactComponent>]
let HomeMenu () =
    Html.ul [ prop.className "home-menu"
              prop.children [ Html.li [ Html.a [ prop.href "/articles"
                                                 prop.text "Articles" ] ]
                              Html.li [ Html.a [ prop.href "/stories"
                                                 prop.text "Stories" ] ] ] ]

[<ReactComponent>]
let Home () =
    Html.main [ Html.h1 "Spacey Cadette"
                HomeMenu() ]
