import React from 'react';

const messageDisplay = (m, i) => {
  return (
    <div className="message-single" key={i}>{m.content}</div>
  )
}

export const MessageLoop = (props) => {
  let messageArray = [];
  props.message.message.forEach((m, i) => {
    messageArray.push (
      messageDisplay(m, i)
    )
  });
  return messageArray;
}
