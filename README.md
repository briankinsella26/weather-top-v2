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
4. Displays a map with markers indication list of user's stations
5. Unlimited station readings
6. Automatically generate readings for a station (data from https://api.openweathermap.org)
7. Displays latest weather data per station
8. Displays min/max values for temperature, wind speed and pressure
9. Displays trends (denoted by up/down arrows) indicating increasing or decreasing values over past 3 readings
10. Displays temperature trends graph (Frappe), indicating temperature values over the past 7 days
11. Displays weather icons that correspond with a weather code (data from https://api.openweathermap.org)
12. About page provide quickstart guide on using the application
13. Homepage provides landing page UI and a feed of random weather facts

Technologies:
This application is built using [Express] framework - https://expressjs.com/ using [Nodejs] - https://nodejs.org/
This project uses the [Fastify](https://www.fastify.io/) framework and explores basic templating with [Handlebars](https://handlebarsjs.com/).
Weather data feed provided by (https://api.openweathermap.org).
Maps have been implemented using [Leaflet] - https://leafletjs.com/ and tiles feed from [Mapbox] https://docs.mapbox.com/api/maps/static-tiles/
Trend charts have been implemented using [Frappe] - https://frappe.io/charts
This application has been built and deployed using the [Glitch] framework - https://glitch.com
The UI - html/css generation uses the [Fomantic-ui] development framework - https://fomantic-ui.com/
[Github] is our source-code/version control platform - https://github.com/

For local development:
on command line enter: 'npm run start'
in browser visit localhost:4000

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
