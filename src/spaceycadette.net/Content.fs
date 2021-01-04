module ContentList

open Feliz
open Fable.React
open Fable.Core.JsInterop

type ContentPreview =
    { Title: string
      PublishedAt: string
      Tags: string list
      Excerpt: string
      Path: string }

type Content =
    { Title: string
      PublishedAt: string
      Tags: string list
      Html: string }

module ContentListView =

    let extractContentPreviewData (cp: obj) =
        let title =
            Utils.getOptionFromPath [| "frontmatter"; "title" |] cp

        let publishedAt =
            Utils.getOptionFromPath [| "frontmatter"; "publishedAt" |] cp

        let tags =
            Utils.getOptionFromPath [| "frontmatter"; "tags" |] cp

        let excerpt =
            Utils.getOptionFromPath [| "excerpt" |] cp

        let path =
            Utils.getOptionFromPath [| "fields"; "slug" |] cp

        match title, publishedAt, tags, excerpt, path with
        | Some t, Some p, Some ts, Some e, Some pa ->
            Some
                { Title = t
                  PublishedAt = p
                  Tags = Array.toList ts
                  Excerpt = e
                  Path = pa }
        | _ -> None


    // "Adapter function" for taking in JS land stuff and converting it into nice F# land data.
    // Could be expanded to validate further, or to flatten or reformat the data.
    let extractContentListData (props: obj) =
        let pathFromPropsToNode =
            [| "data"
               "allMarkdownRemark"
               "nodes" |]

        Utils.getOptionFromPath pathFromPropsToNode props
        |> Option.map (Array.toList)
        |> Option.map (List.map extractContentPreviewData)
        |> Option.bind
            (fun xs ->
                if List.forall Option.isSome xs then
                    Some xs
                else
                    None)
        |> Option.map (List.map Option.get)

    let private contentListTagList (tags: string list) =
        List.map (Html.li: string -> ReactElement) tags

    let private contentListItem (content: ContentPreview) =
        Html.article [ prop.children [ Html.h2 content.Title
                                       Html.h4 (content.PublishedAt)
                                       Html.ul [ prop.children (contentListTagList content.Tags) ]
                                       Html.p content.Excerpt
                                       Gatsby.Link { ``to`` = content.Path } [ Html.p "(...)" ] ] ]

    let private contentList (content: ContentPreview list) = List.map contentListItem content

    let private contentListView (content: ContentPreview list option) =
        match content with
        | Some c ->
            Html.main [ Html.h1 "List of Articles"
                        Html.ul [ prop.children (contentList c) ] ]
        | None -> Html.none

    [<ReactComponent>]
    let ContentListView (props: obj) =
        let c =
            props
            |> extractContentListData
            |> contentListView
            |> Seq.singleton

        Layout.Layout !!{| children = c |}

module ContentView =
    // "Adapter function" for taking in JS land stuff and converting it into nice F# land data.
    // Could be expanded to validate further, or to flatten or reformat the data.
    let private extractContentData (props: obj) =
        let pathFromPropsToNode =
            [| "data"
               "allMarkdownRemark"
               "nodes"
               "0" |]

        let title =
            Utils.getOptionFromPath (Array.append pathFromPropsToNode [| "frontmatter"; "title" |]) props

        let publishedAt =
            Utils.getOptionFromPath (Array.append pathFromPropsToNode [| "frontmatter"; "publishedAt" |]) props

        let tags =
            Utils.getOptionFromPath (Array.append pathFromPropsToNode [| "frontmatter"; "tags" |]) props

        let html =
            Utils.getOptionFromPath (Array.append pathFromPropsToNode [| "html" |]) props

        // There has got to be a better way of doing this, maybe using FSharpPlus and traverse?
        // TODO -> Experiment and make sure FSharpPlus applicative validation works in fable...
        match title, publishedAt, tags, html with
        | Some t, Some p, Some ts, Some html ->
            Some
                { Title = t
                  PublishedAt = p
                  Tags = Array.toList ts
                  Html = html }
        | _ -> None

    let private contentTagList (tags: string list) =
        List.map (Html.li: string -> ReactElement) tags

    let private contentView (content: Content option) =
        match content with
        | Some c ->
            Html.main [ Html.h1 c.Title
                        Html.h4 (c.PublishedAt)
                        Html.ul (contentTagList c.Tags)
                        Html.article [ prop.dangerouslySetInnerHTML c.Html ] ]
        | None -> Html.none

    [<ReactComponent>]
    let ContentView (props: obj) =
        // This is awkward, but passing props appears to be awkward in Fable.
        // I am taking the props and calling using it to render the children
        // and then pass this to the layout.
        let c: ReactElement seq =
            props
            |> extractContentData
            |> contentView
            |> Seq.singleton

        Layout.Layout !!{| children = c |}
