import React from 'react';

const modes = (m) => {
  switch(m){
    case "off":
      return `highlight_off`
    case "heat":
      return `whatshot`
    case "cool":
      return `ac_unit`
    case "auto":
      return `autorenew`
    case "eco":
      return `filter_vintage`
    default:
      return "";
  }
}

export const ClimateBox = (c) => {
  return (
    <div className="climate-box">
      <div className="climate-icon"><i className="material-icons" aria-hidden="true">{modes(c.data.attributes.operation_mode)}</i></div>
      <div>{c.data.attributes.friendly_name}</div>
      <div className="climate-block">
        <div className="climate-temps">
          <div className="climate-individual-temp"><span>Current:</span>&nbsp;<span>&nbsp;{c.data.attributes.current_temperature}{c.data.attributes.unit_of_measurement}</span></div>
          <div className="climate-individual-temp"><span>Set:</span>&nbsp;<span>&nbsp;{c.data.attributes.temperature}{c.data.attributes.unit_of_measurement}</span></div>
        </div>
      </div>
    </div>
  )
}
