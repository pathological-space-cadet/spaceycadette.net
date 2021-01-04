---
title: "A Foray Into: Phoenix - Part One"
publishedAt: 2021-02-01
tags: ["tech", "foray", "phoenix"]
---

I think there are a a million better things I could be doing, including working on the styles for this site. But I have decided not to do any of that. I'm in an unmotivated, procrastinate-y sort of mood; a little bit listless, a little bit bored, and yet nothing that I acutally have to do is really calling out to me at the moment, so I think, that if I'm going to be like this I may as well be like this and know Phoenix at the same time.

Mind you, I have been meaning to start learning Phoenix and taking it seriously for a long time, possibly over a year now. And I have started in fits, and taken one or two courses before. But I couldn't think of decent project and so none of it really sunk in. There is also the dilemma of will I ever really need this? Is it really worth my time _right now_?

It has got to be one of the better frameworks out there and the stuff that they are doing with liveview seems game-changing, or at least it would be if there was significant adoption. There is no doubt in my mind, that Phoenix represents a significant improvement over similar frameworks like Rails or Django, but those have much more established communities and bigger ecosystems. They also have many more opportunities for jobs in that there are many more Rails and Django apps out there, but the issue there is that surely there aren't so many that there is a really free and open competion. I think that for most of these job they would want someone with years of _just_ Rails or Django experience and a much deeper understanding of a lot of the framework specific quirks and best practices.

On the backend, perhaps I would be better served by upping my Express or Koa knowledge? I already have significant Nodejs experience, but I could do with teaching myself better best practices around testing, logging and those kind of things? That would be more attainable.

If I am working with Chatbots and want to either switch over to a dotnet implementation, or do a lot of work with Azure functions then ASP.net core would be a better shout.

And what am I really targeting with this learning? Surely if I am trying to get closer to "prime time" and getting ready to start taking on freelance clients for websites then working with a CMS would be a better call? Maybe get some WP experience. I know that it gets a bad rap, but it is what a lot of people are looking for. For most of the clients that I am actually thinking about targeting would not appreciate some fancy, performant framework with a bunch of bells and whistles more than something that works and has a decent admin panel and plugin options, which god knows I am not about to build myself. Working with a headless CMS might be my best bet there, but even then? Many jobs and folks already have WP sites up and running and just want some theme-fu.

Maybe I am wasting my time on the backend in general? I should be working on how to use UI frameworks, themes and templates a lot more effectively, and how to be able to deliver good looking sites with the least amount of work essentially. When you start learning to code, you--well, I'll speak for myself--I get overawed by all the possibilities of tech to learn and you get the sense that you can learn it all and it's going to come in handy, but at the same time there is a disconnect between that and the actual freelance space which is mostly brochure and content sites, and clients mostly want to handle their own marketing, shopping and content via some other service like wordpress and shopify, which let's face it, is always going to be better than some amateur custom job.

Whether on the front-end or the back-end I have persisted in the delusion that anyone is going to pay good money for an amateur custom job. People look down on people who put together a bunch of libraries and never do any custom coding, just glue these things together and call it a day. But when you break it down, that really is the job, it's not even really lazy; it's hard enough to do that when you imagine there is so much to know. If you get good with these tools, and are a good, reliable communicator that delivers results that would be much more effective than knowing how to code and build every little thing yourself. I am coming around very slowly to the very obvious, and very late observation that I am neither the former nor the latter, and I'm not really a new programmer anymore, and I was hardly a spring chicken when I started at that.

I know that I probably don't _need_ Phoenix, but I _will_ learn it eventually. It might as well be today.

## Phoenix in Action

Wow, that was a downer. Doesn't exactly suck you in does it? Oh well, let's get into it.

I am working from _Phoenix In Action_ by Geoffrey Lessel, and I will be taking notes as I go.

### Chapter One: Ride the Phoenix

Chapter One goes over the pros and cons of Phoenix as a framework, and provides some background on Elixir as a language. Not only is going over the language features relevant in itself, but it makes definite sense when discussing the strengths and weaknesses of the framework since so much of it is based on the strengths and weakness of the language itself.

The main point here is that Phoenix runs on Elixir, and Elixir runs on Erlang; Erlang was written to meet the specifications of the telecoms industry and to the extent that this is relevant in the domain of web-development, which it is, and is becoming more so all the time, Elixir and by extension Phoenix has several interesting properties that can making writing programs designed for concurrency much more performant and much simpler.

Similar to, if not much more drastic, the difference between using functional programming features and traits within an Object-oriented or multi-paradigm language and of using a bona-fide functional language, writing concurrent programs based around the actor model is possible in languages like Java using Akka, but it's amazingly refreshing to do it using a language designed with it in mind. And on top of the language features, Phoenix also has a suite of features that take advantage of this in a web context, like channels and LiveView (using channels). If you are making something that requires a lot of real-time communication, or using a lot of lightweight push updates then it is a dream. The fact that you can basically afford to give every connection to your app it's own durable connection, on what amounts to its own thread with dedicated memory is insane. Having the VM handle scheduling between Erlang threads is really powerful. In a way it's like stepping back in time to web-forms, imagine you were writing in Java, or C# and for every current user for your app you could just spin up an object that represented the connect and hold them all in memory, now imagine you could give it its own thread. In Elixir, not only can you get away with that, it's the best way to model your application.

Of course, there are drawbacks. It's not a CPU driven, number crunching powerhouse. It's not Go or C++, and can't handle long memory intensive activities like Crypto, Audio or Graphical processing as well as those languages can. Also, the community is famously friendly and helpful, but it just isn't that big.

The deal with Phoenix I think is that it takes the legacy of Rails, and runs with it. It's MVC done well. Judged by the standards of frameworks in other languages, it's well written, it does the things you would expect of a framework and I think it does them slightly better than most of the alternatives. Ecto is nice to work with from what I have seen. It's not as dogmatic about structure than others, but still, its MVC orientation is reassuring. It's built on plug but is by no means a plug or express-like micro-framework.

Throw Elixir and Erlang into the mix and you get superpowers. Like I said earlier, I'm not sure that I need the experience of a batteries-included MVC platform type framework, but if I am going to get experience with any of them then I'm most excited for Phoenix. I haven't even really begun to get to grips with it yet (properly, that is,) and I could be wrong, but it definitely seems like one of the best out there.

### Chapter Two: Intro into Elixir

By now, I have had a few Intros into Elixir and I think I'm good at this point. That's not to say that I am very accomplished in it, but I have learned all I am ever going to learn without working on something for myself. Otherwise, I will never interalise more than I already have. I think I have all the main concepts down: data types, pattern-matching, basic iex stuff, things like that.

I could go through most of it for any (hypothetical) readers benefit, but I am going to move on. I would never cover it satisfactoriy and there are a milion resources on Elixir basics.

Even so, I read through the chapter for completeness' sake and to re-aquaint myself briefly. I don't know why I have never picked it up seriously, it's just a really fun language to write in. That maybe more than any other feature makes me really want to learn Elixir and Phoenix. Again, a client is never going to care about how fun a language is to work with when there are others with many more developers available to work in it. I know that, but still, Elixir is like what I imagine finding Ruby was like coming from PHP or Perl. It's ergonomic, it's simple and fun to write, the developer experience when it comes to testing, or documentation is so nice, and even iex makes working trying debugging pleasant. Not to mention, it's functional and really easy to test and reason about.

It's not all sunshine and roses, I know, but my impression is that things don't get really complicated unless you start really getting to grips with OTP. But even there, it's no use getting intimidated. It's big and complicated because it handles a lot of big and complicated things for you. It would be much more difficult, if not impossible to handle those types of things without it. And generally, you shouldn't worry about trying to learn all of it's features before you really need them. Especially within the context of Phoenix, you can really skate by with maybe only basic knowledge of genservers.

Again, I'm talking from impressions that I get from having learned bit and pieces of the language before. You can probably tell that I have been mulling over getting into Elixir and Phoenix for far too long without really doing anything about it...

### To Be Continued.

I'm going to leave it here for now. The next chapter is where discussion of the framework really begins, so these first two are really just getting a few things out of the way. Ideally, I would get to the third chapter and I could start fresh on the second part of the book, which would mean getting into the code, but here is good enough.

Until next time...
