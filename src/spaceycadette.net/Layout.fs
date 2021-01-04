module Layout

open Feliz
open Fable.React

type ILayoutProps =
    abstract children: ReactElement seq with get, set

[<ReactComponent>]
let Layout (input: ILayoutProps) =
    Html.div [ prop.classes [ "layout" ]
               prop.children input.children ]
