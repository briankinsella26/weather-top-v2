"use strict";

const logger = require("../utils/logger");
const randomFact = require("../utils/random-facts");
const accounts = require("./accounts.js");

const home = {
  index(request, response) {
    logger.info("home page rendering");
    let user = null;
    if (request.cookies.weathertop) {
      user = accounts.getCurrentUser(request);
    }
    const viewData = {
      title: "Weathertop",
      fact: randomFact,
      user: user,
    };
    response.render("home", viewData);
  },
};

module.exports = home;
