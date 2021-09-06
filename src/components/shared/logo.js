// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Images
import LogoImage from '../../images/logodiv.png';

// Component
export const Logo = ({ width = 300, height = 160 }) => (
  <img src={LogoImage} alt="Logo" style={{ width, height }} />
);

// Prop Types
Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

// Exports
export default React.memo(Logo);
