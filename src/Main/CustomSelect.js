import React from 'react';
import './CustomSelect.scss';

const CustomSelect = () => {
  const [randomId] = React.useState(() => Math.random().toString(36).substr(2));
  return (
    <div className="custom-item custom-select">
      <select id={randomId}>
        <option value="Option 1">Select 1</option>
        <option value="Option 2">Select 2</option>
        <option value="Option 3">Select 3</option>
        <option value="Option 4">Select 4</option>
        <option value="Option 5">Select 5</option>
      </select>
      <span className="focus" />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CustomInput = ({ textMin, textMax }) => (
  <div className="custom-input-group">
    <span>Цена</span>
    <div className="custom-item custom-input">
      <input type="number" min={textMin} max={textMax} placeholder={textMin} />
    </div>
    <div className="custom-item custom-input">
      <input type="number" min={textMin} max={textMax} placeholder={textMax} />
    </div>
  </div>
);

export { CustomSelect, CustomInput };
