import React from 'react';

export const Button = ({ children, className }) => (
  <button className={`rounded-2xl shadow px-4 py-2 font-semibold ${className}`}>
    {children}
  </button>
);
