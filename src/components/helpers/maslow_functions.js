// import React from 'react';
import moment from 'moment';

const currMin = moment(new Date()).minute();
const currHour = moment(new Date()).hour();
const currDay = moment(new Date()).day();


export const stateFinder = (m) => {
  switch(m){
    case "hygge":
      return `weekend`
    case "work":
      return `monetization_on`
    case "dinner":
      return `local_dining`
    case "coffee":
      return `local_cafe`
    case "sleep":
      return `local_hotel`
    case "bus":
      return `directions_bus`;
    case "homework":
      return `local_library`;
    default:
      return "";
  }
}

export const maslowFinder = () => {
  if (currDay !== 0 && currDay !== 6 ) {
    if (currHour <= 5) {
      if (currMin <= 45) {
        return "sleep";
      } else {
        return "coffee";
      }
    } else if (currHour > 6 && currHour <= 8) {
      return "coffee";
    } else if (currHour > 9 && currHour <= 2) {
      if (currMin < 30) {
        return "work";
      } else {
        return "bus";
      }
    } else if (currHour >= 15 && currHour < 18) {
      if (currMin < 15) {
        return "bus";
      } else {
        return "homework";
      }
    } else if (currHour >= 18 && currHour <= 19) {
      return "dinner";
    } else if (currHour > 19 && currHour <= 22){
      return "hygge";
    } else {
      return "sleep";
    }
  } else {
    if (currHour > 7 && currHour <= 10) {
      return "coffee";
    } else {
      return "hygge";
    }
  }
}
