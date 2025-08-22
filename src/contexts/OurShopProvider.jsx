import { createContext, useState } from 'react';

export const OurShopContext = createContext();
export const OurShopProvider = ({ children }) => {
  const sortOptions = [
    {
      label: 'Default sorting',
      value: '0'
    },
    {
      label: 'Sort by popularity',
      value: '1'
    },
    {
      label: 'Sort by average rating',
      value: '2'
    },
    {
      label: 'Sort by latest',
      value: '3'
    },
    {
      label: 'Sort by price: low to high',
      value: '4'
    },
    {
      label: 'Sort by price: high to low',
      value: '5'
    }
  ];
  const showOptions = [
    { label: '8', value: '8' },
    { label: '12', value: '12' },
    { label: 'All', value: 'all' }
  ];
  const values = {
    sortOptions,
    showOptions
  };
  return (
    <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
  );
};
