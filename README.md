# es6-babel-gulp-practice

Soon this repo will be renamed: I'm using it to recode my MakerSquare thesis project, Digiquiz. 

At MaydayPAC, at MakerSquare and in my job at Cycorp, the code needs to accomplish practical things, and it needs to do so in a limited amount of time. It is a “rushed” development cycle, and if the “better” way of doing things takes longer to develop, it may mean, unfortunately, that the quick and dirty way wins out.

So while I’ve been a developer for longer than I thought I have, I’ve come to the conclusion that I’ve never really had time to develop code that I thought was “truly good.””

For the MakerSquare thesis project, there were some difficulties (that I won’t get into here) which left us with half the development time of other teams, and we lost two out of an original five developers along the way.

We made significant choices based on our lack of development time and manpower, not because we believed them to be the best for the project, but because we had to make sure at the end of the day we had a working project that we could show potential employers.

For example:

* We used MongoDB rather than PostgreSQL

Digiquiz’s data is almost entirely relational in nature. Teachers have classes, classes have students – while it is possible that there are many-to-many relations, of course, that simply means you need join tables. From a long-term architecture standpoint, a relational DB would have been a more fitting choice. However, Mongo is much easier to develop for, and the ability to store objects and arrays in Mongo meant it was much easier to add and remove features without having to constantly redesign the schema to match.

* We used an MVC pattern instead of Flux

While React and Flux are made to work for each other, understanding Flux was something the entire team had trouble processing at the time. We certainly could have gotten it, but with the deadline on our backs, we decided to develop using the older and more conventional MVC framework (which we were all familiar with from the MakerSquare curriculum), instead of using a Flux architecture. Looking back on it, now, using Flux, Reflux, (or the new hotness, Redux), would have been the better option for the long term.

* We used multiple modular scripts loaded in the HTML instead of bundling via browserify/webpack.

This was a big one. We tried multiple times and multiple ways to build out our client using browserify/webpack, but never took the time to understand the tools and how they worked. As a result, we ended up loading in the modules one by one on the index.html page, resulting in noticably slower load times. Again, we did what we could in the timeframe, compared to what we knew would be best.

* We couldn’t finish charting of student data

Though we really wanted to make sure we had data visualization working, in the end, we decided to go with Charts.js instead of D3.js, because, again, we felt the simple route was all we had time for. It was only after a few attempts that we realized that Charts.js didn’t have the functionality we needed, and as a result, data visualization never made it into the final product. (This was a big blow, especially, to Peter, who really wanted to focus on data visualization as something he wanted to own. As product owner, I feel guilty about making the call to go with Charts.js, but I still stand by it.)

So, now that I’m only working 40 hours a week (instead of 66), one of the things I’m doing is redeveloping Digiquiz more or less from scratch, this time, taking the time to truly understand the best way, and taking the time (now that there is no time pressure) to develop in that manner.

* I’m using ES6 to make the code more modular.
* I’m developing unit testing for nearly every function.
* I’m using gulp to automate testing and other tasks.
* I’m planning on using a packing system for the client (though I don’t know if that’s going to be Browserify, Webpack, or Rollup.js just yet).
* I’m going to be using PostgreSQL instead of MongoDB as the database.
* I’m going to put in data visualization using D3.js

And it is hard. Not just because I only have nights and weekends, but because I have to power through when I don’t quite understand a technology. I no longer have the excuse of deadlines to excuse the quick and dirty way, I have to do things right. A way without acruing technical debt.

The differences between the two types of development are significant… something that I’m only appreciating now that I have time to code on my own projects.
