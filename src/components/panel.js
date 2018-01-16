import React from 'react';

const Panel = (props) => {
  const panelSize = `panel panel-width-${props.width} panel-height-${props.height}`;
  return (
    <div className={panelSize} style={{ backgroundColor: `#${props.color}`}}>
      {props.children}
    </div>
  );
};

export default Panel;
