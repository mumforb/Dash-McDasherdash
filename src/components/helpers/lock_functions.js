import React from 'react';

const lockModes = (m) => {
  switch(m){
    case "locked":
      return `lock`
    case "unlocked":
      return `lock_open`
    default:
      return "";
  }
}

export const LocksBox = (c) => {
  return (
    <div className="climate-box">
      <div>{c.data.attributes.friendly_name}</div>
      <div className="climate-icon"><i className="material-icons" aria-hidden="true">{lockModes(c.data.state)}</i></div>
    </div>
  )
}
