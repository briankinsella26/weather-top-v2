"use strict";

const weatherCodes = {
  getWeatherIcon(weatherCode) {
    let weatherIcons = [
      { code: 100, icon: "sun icon" },
      { code: 200, icon: "cloud sun icon" },
      { code: 300, icon: "cloud icon" },
      { code: 400, icon: "cloud sun rain icon" },
      { code: 500, icon: "cloud showers heavy icon" },
      { code: 600, icon: "cloud rain icon" },
      { code: 700, icon: "snowflake icon" },
      { code: 800, icon: "bolt icon" },
    ];
    let icon;
    weatherIcons.forEach((weatherIcon) => {
      if (weatherIcon["code"] == weatherCode) {
        icon = weatherIcon["icon"];
      }
    });
    return icon;
  },
  //todo move this all into one function
  getWeatherLabel(weatherCode) {
    let weatherLabels = [
      { code: 100, label: "Clear" },
      { code: 200, label: "Partial Clouds" },
      { code: 300, label: "Cloudy" },
      { code: 400, label: "Light Showers" },
      { code: 500, label: "Heavy Showers" },
      { code: 600, label: "Rain" },
      { code: 700, label: "Snow" },
      { code: 800, label: "Thunder" },
    ];
    let label;
    weatherLabels.forEach((weatherLabel) => {
      if (weatherLabel["code"] == weatherCode) {
        label = weatherLabel["label"];
      }
    });
    return label;
  },
};

module.exports = weatherCodes;
