# Hello Node!

This project includes a Node.js server script and a web page that connects to it. The front-end page presents a form the visitor can use to submit a color name, sending the submitted value to the back-end API running on the server. The server returns info to the page that allows it to update the display with the chosen color. 🎨

[Node.js](https://nodejs.org/en/about/) is a popular runtime that lets you run server-side JavaScript. This project uses the [Fastify](https://www.fastify.io/) framework and explores basic templating with [Handlebars](https://handlebarsjs.com/).

## Prerequisites

You'll get best use out of this project if you're familiar with basic JavaScript. If you've written JavaScript for client-side web pages this is a little different because it uses server-side JS, but the syntax is the same!

## What's in this project?

← `README.md`: That’s this file, where you can tell people what your cool website does and how you built it.

← `public/style.css`: The styling rules for the pages in your site.

← `server.js`: The **Node.js** server script for your new site. The JavaScript defines the endpoints in the site back-end, one to return the homepage and one to update with the submitted color. Each one sends data to a Handlebars template which builds these parameter values into the web page the visitor sees.

← `package.json`: The NPM packages for your project's dependencies.

← `src/`: This folder holds the site template along with some basic data files.

← `src/pages/index.hbs`: This is the main page template for your site. The template receives parameters from the server script, which it includes in the page HTML. The page sends the user submitted color value in the body of a request, or as a query parameter to choose a random color.

← `src/colors.json`: A collection of CSS color names. We use this in the server script to pick a random color, and to match searches against color names.

← `src/seo.json`: When you're ready to share your new site or add a custom domain, change SEO/meta settings in here.

## Try this next 🏗️

Take a look in `TODO.md` for next steps you can try out in your new site!

___Want a minimal version of this project to build your own Node.js app? Check out [Blank Node](https://glitch.com/edit/#!/remix/glitch-blank-node)!___

![Glitch](https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576)

## You built this with Glitch!

[Glitch](https://glitch.com) is a friendly community where millions of people come together to build web apps and websites.

- Need more help? [Check out our Help Center](https://help.glitch.com/) for answers to any common questions.
- Ready to make it official? [Become a paid Glitch member](https://glitch.com/pricing) to boost your app with private sharing, more storage and memory, domains and more.


Author: Brian Kinsella
Student number: 16728365

Purpose:
The purpose of this web application is to provide an interface to compliment a weather station hardware device.
The application connects to a database for storage and has a back-end and a front end. The web interface allow users interaction with
the application, to read, write, edit and delete weather data.

Attributes:
1. User account functionality, signup, login, edit, logout.
2. Storage and display of data per user
3. Unlimited stations
4. Unlimited station readings
5. Displays latest weather data per station
6. Displays min/max values for temperature, wind speed and pressure
7. Displays trends (denoted by up/down arrows) indicating increasing or decreasing values over past 3 readings
8. Displays weather icons that correspond with a weather code.
9. About page provide quickstart guide on using the application
10. Homepage provides landing page UI and a feed of random weather facts

Technologies:
This application has been built using the play framework - https://www.playframework.com/
The UI - html/css generation uses the Fomantic-UI development framework - https://fomantic-ui.com/
The database is on a free tier hosted by - https://www.elephantsql.com/
The application is deployed and hosted on a free tier by - https://www.heroku.com/home
Github is our source-code/version control platform - https://github.com/

For local development:
in application.conf: application.mode=dev (enable)
                     prod.application.mode=prod (disable)

for local db:   db.default=mem (enable)
                db.default=postgres://.... (disable)

Sources:

Images:
https://dribbble.com/shots/2721869-Free-weather-icons-source-file
https://www.pexels.com/photo/fallen-trees-on-forest-1846608/
https://www.pexels.com/photo/red-wooden-house-surrounded-with-trees-covered-with-snow-1887629/
https://www.pexels.com/photo/field-with-wildflowers-and-plants-4577844/
https://www.pexels.com/photo/dawn-nature-field-flowers-5180292/

Weather facts:
https://www.natgeokids.com/ie/discover/geography/physical-geography/30-freaky-facts-about-weather/

This application is a submission for educational purposes only

