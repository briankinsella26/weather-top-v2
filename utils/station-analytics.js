"use strict";

const logger = require("../utils/logger");
const conversions = require("../utils/conversions");
const weatherCodes = require("../utils/weather-codes");

const stationAnalytics = {
  getLatestReading(readings) {
    let latestReading = null;
    if (readings.length > 0) {
      let latestDate = new Date();
      latestDate.setTime(0);
      readings.forEach((reading) => {
        if (new Date(reading.date) > latestDate) {
          latestDate = new Date(reading.date);
          latestReading = reading;
        }
      });
    }
    return latestReading;
  },

  getMaxReading(readings, readingType) {
    let maxReading = readings[0];
    readings.forEach((reading) => {
      if (readingType == "beaufort") {
        if (reading.beaufort > maxReading.beaufort) {
          maxReading = reading;
        }
      } else if (readingType == "temperature") {
        if (reading.temperature > maxReading.temperature) {
          maxReading = reading;
        }
      } else if (readingType == "pressure") {
        if (reading.pressure > maxReading.pressure) {
          maxReading = reading;
        }
      } else {
        logger.error("invalid parameters passed");
      }
    });
    return maxReading;
  },

  getMinReading(readings, readingType) {
    let minReading = readings[0];
    readings.forEach((reading) => {
      if (readingType == "beaufort") {
        if (reading.beaufort < minReading.beaufort) {
          minReading = reading;
        }
      } else if (readingType == "temperature") {
        if (reading.temperature < minReading.temperature) {
          minReading = reading;
        }
      } else if (readingType == "pressure") {
        if (reading.pressure < minReading.pressure) {
          minReading = reading;
        }
      } else {
        logger.error("invalid parameters passed");
      }
    });
    return minReading;
  },

  getWeatherTrendIcon(readings, weatherParam) {
    let trend = "";
    if (readings.length >= 3) {
      let reading1 = 0;
      let reading2 = 0;
      let reading3 = 0;

      switch (weatherParam) {
        case "temperature":
          reading1 = readings[readings.length - 3].temperature;
          reading2 = readings[readings.length - 2].temperature;
          reading3 = readings[readings.length - 1].temperature;
          break;
        case "windSpeed":
          reading1 = readings[readings.length - 3].windSpeed;
          reading2 = readings[readings.length - 2].windSpeed;
          reading3 = readings[readings.length - 1].windSpeed;
          break;
        case "pressure":
          reading1 = readings[readings.length - 3].pressure;
          reading2 = readings[readings.length - 2].pressure;
          reading3 = readings[readings.length - 1].pressure;
          break;
        default:
          logger.error("Invalid weather params");
      }
      if (reading2 > reading1 && reading3 > reading2) {
        trend = "arrow up icon";
      } else if (reading2 < reading1 && reading3 < reading2) {
        trend = "arrow down icon";
      } else {
        trend = "";
      }
    }
    return trend;
  },

  updateWeather(station) {
    (station.temperatureTrend = this.getWeatherTrendIcon(station.readings, "temperature")),
      (station.windSpeedTrend = this.getWeatherTrendIcon(station.readings, "windSpeed")),
      (station.pressureTrend = this.getWeatherTrendIcon(station.readings, "pressure")),
      (station.latestReading = this.getLatestReading(station.readings)),
      (station.maxBeaufort = this.getMaxReading(station.readings, "beaufort").beaufort),
      (station.minBeaufort = this.getMinReading(station.readings, "beaufort").beaufort),
      (station.maxTemperature = this.getMaxReading(station.readings, "temperature").temperature),
      (station.minTemperature = this.getMinReading(station.readings, "temperature").temperature),
      (station.maxPressure = this.getMaxReading(station.readings, "pressure").pressure),
      (station.minPressure = this.getMinReading(station.readings, "pressure").pressure),
      (station.tempCelcius = station.latestReading.temperature),
      (station.tempFahrenheit = conversions.getFahrenheit(station.tempCelcius)),
      (station.beaufortLabel = conversions.getBeaufort(station.latestReading.windSpeed).label),
      (station.beaufort = conversions.getBeaufort(station.latestReading.windSpeed).beaufort),
      (station.windCompass = conversions.getWindCompass(station.latestReading.windDirection)),
      (station.windChill = conversions.getWindChill(
        station.latestReading.temperature,
        station.latestReading.windSpeed
      )),
      (station.weatherInfo = weatherCodes.getWeatherInfo(station.latestReading.code));
    return station;
  },
};

module.exports = stationAnalytics;
