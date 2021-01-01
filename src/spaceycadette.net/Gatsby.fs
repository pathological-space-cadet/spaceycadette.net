// fsharplint:disable RecordFieldNames
module Gatsby

open Fable.Core.JsInterop
open Fable.React

type LinkProps = { ``to``: string }

let Link (props: LinkProps) (elems: ReactElement list): ReactElement = ofImport "Link" "gatsby" props elems
