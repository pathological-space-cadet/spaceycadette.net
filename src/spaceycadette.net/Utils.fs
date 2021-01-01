module Utils

open Fable.Core
open Fable.Core.JsInterop

let private path<'a> : string array -> obj -> 'a = importMember "ramda"

let getOptionFromPath<'a> (p: string array) (o: obj) =
    match path<'a> p o with
    | x when isNullOrUndefined x -> None
    | x -> Some x
