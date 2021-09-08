"use strict";

const logger = require("./logger");

const conversions = {
  getFahrenheit(tempCelcius) {
    return Math.round((tempCelcius * 9) / 5 + 32);
  },

  getBeaufort(windSpeed) {
    let beaufort;
    let label;
    if (windSpeed < 1) {
      beaufort = 0;
      label = "Calm";
    } else if (windSpeed >= 1 && windSpeed <= 5) {
      beaufort = 1;
      label = "Light Air";
    } else if (windSpeed >= 6 && windSpeed <= 11) {
      beaufort = 2;
      label = "Light Breeze";
    } else if (windSpeed >= 12 && windSpeed <= 19) {
      beaufort = 3;
      label = "Gentle Breeze";
    } else if (windSpeed >= 20 && windSpeed <= 28) {
      beaufort = 4;
      label = "Moderate Breeze";
    } else if (windSpeed >= 29 && windSpeed <= 38) {
      beaufort = 5;
      label = "Fresh Breeze";
    } else if (windSpeed >= 39 && windSpeed <= 49) {
      beaufort = 6;
      label = "Strong Breeze";
    } else if (windSpeed >= 50 && windSpeed <= 61) {
      beaufort = 7;
      label = "Near Gale";
    } else if (windSpeed >= 62 && windSpeed <= 74) {
      beaufort = 8;
      label = "Gale";
    } else if (windSpeed >= 75 && windSpeed <= 88) {
      beaufort = 9;
      label = "Severe Gale";
    } else if (windSpeed >= 89 && windSpeed <= 102) {
      beaufort = 10;
      label = "Strong Storm";
    } else if (windSpeed >= 103 && windSpeed <= 117) {
      beaufort = 11;
      label = "Violent Storm";
    } else {
      return -1;
    }
    return { beaufort: beaufort, label: label };
  },

  getWindCompass(windDirection) {
    let direction = "";
    if ((windDirection >= 348.75 && windDirection <= 360) || (windDirection >= 0 && windDirection < 11.25)) {
      direction = "N";
    } else if (windDirection >= 11.25 && windDirection < 33.75) {
      direction = "NNE";
    } else if (windDirection >= 33.75 && windDirection < 56.25) {
      direction = "NE";
    } else if (windDirection >= 56.25 && windDirection < 78.75) {
      direction = "ENE";
    } else if (windDirection >= 78.75 && windDirection < 101.25) {
      direction = "E";
    } else if (windDirection >= 101.25 && windDirection < 123.75) {
      direction = "ESE";
    } else if (windDirection >= 123.75 && windDirection < 146.25) {
      direction = "SE";
    } else if (windDirection >= 146.25 && windDirection < 168.75) {
      direction = "SSE";
    } else if (windDirection >= 168.75 && windDirection < 191.25) {
      direction = "S";
    } else if (windDirection >= 191.25 && windDirection < 213.75) {
      direction = "SSW";
    } else if (windDirection >= 213.75 && windDirection < 258.75) {
      direction = "SW";
    } else if (windDirection >= 258.75 && windDirection < 281.25) {
      direction = "WSW";
    } else if (windDirection >= 281.25 && windDirection < 303.75) {
      direction = "W";
    } else if (windDirection >= 303.75 && windDirection < 326.25) {
      direction = "WNW";
    } else if (windDirection >= 326.25 && windDirection < 33.75) {
      direction = "NW";
    } else if (windDirection >= 11.25 && windDirection < 348.75) {
      direction = "NNW";
    } else {
      logger.error("Invalid input");
    }
    return direction;
  },

  getWindChill(temperature, windSpeed) {
    return Math.round(
      13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
    );
  },
};

module.exports = conversions;
