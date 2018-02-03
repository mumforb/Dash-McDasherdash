import React from 'react';

export const lightModes = (m) => {
  switch(m){
    case "off":
      return `brightness_low`
    case "on":
      return `brightness_high`
    default:
      return "";
  }
}
