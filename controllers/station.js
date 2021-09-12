"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const stationAnalytics = require("../utils/station-analytics");
const uuid = require("uuid");
const axios = require("axios");
const apiKey = "c7d9b7e8290a4ebd02ae98f4cdfc9c00";

const station = {
  index(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    if (station.readings.length > 0) {
      stationAnalytics.updateWeather(station);
    }
    const viewData = {
      title: "Station",
      station: station,
    };
    response.render("station", viewData);
  },

  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationStore.removeReading(stationId, readingId);
    response.redirect("/station/" + stationId);
  },

  addReading(request, response) {
    const stationId = request.params.id;
    const newReading = {
      date: new Date().toLocaleString(),
      id: uuid.v1(),
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: Number(request.body.windDirection),
      pressure: Number(request.body.pressure),
    };
    logger.debug("New reading = ", newReading);
    stationStore.addReading(stationId, newReading);
    response.redirect("/station/" + stationId);
  },

  async addAutoReading(request, response) {
    logger.info("rendering auto reading");
    const station = stationStore.getStation(request.params.id);
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${station.latitude}&lon=${station.longitude}&units=metric&appid=${apiKey}`
    );
    if (result.status == 200) {
      const reading = result.data.current;
      const trends = result.data.daily;
      let tempTrend = [];
      let trendLabels = [];
      for (let i = 0; i < trends.length; i++) {
        tempTrend.push(trends[i].temp.day);
        const date = new Date(trends[i].dt * 1000);
        trendLabels.push(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
      }
      const autoReading = {
        date: new Date().toLocaleString(),
        id: uuid.v1(),
        code: Number(reading.weather[0].id),
        temperature: Number(reading.temp),
        windSpeed: Number(reading.wind_speed),
        windDirection: Number(reading.wind_deg),
        pressure: Number(reading.pressure),
      };

      const trendReport = {
        tempTrend: tempTrend,
        trendLabels: trendLabels,
      };
      stationStore.addTrendReport(station.id, trendReport);
      stationStore.addReading(station.id, autoReading);
    } else {
      logger.info(`${result.status} response from openweathermap.org`);
    }
    response.redirect("/station/" + station.id);
  },
};

module.exports = station;
