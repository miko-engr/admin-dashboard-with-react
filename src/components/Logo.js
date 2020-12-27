import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/logo.png"
      {...props}
      width={40}
    />
  );
};

export default Logo;
