import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, invert, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      invert ? 'invert' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
