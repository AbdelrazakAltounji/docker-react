import React from 'react';
//import sum from './sum';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


//it('sum test', () =>{
 // expect(sum(1, 2)).toEqual(3);
  //expect(sum(2, 2)).toEqual(4); 
//});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

