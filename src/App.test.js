import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';



test('there should be a greeting', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Zoo Adventures, the App for animal lovers/i);
  expect(linkElement).toBeInTheDocument();
});

test('if the user clicks on the ostrich button, there should be one more ostrich on the screen', () => {
  render(<App />);
  const ostrichElementAtLoad = screen.getAllByText(/𓅦/i);


  //initially there should be one ostrich
  expect(ostrichElementAtLoad.length).toBe(1);


  const ostrichButton = screen.getByText(/Add ostrich/i);

  fireEvent.click(ostrichButton);

  const ostrichElementsAfterClick = screen.getAllByText(/𓅦/i);

  expect(ostrichElementsAfterClick.length).toBe(2);
});

test('if the user clicks on the ostrich button, there should be one more ostrich on the screen', () => {
  render(<App/>);
  const emojisOnLoad = screen.getAllByText(/𓅦|🐆|🦏|🐃|🐘/i);

  expect(emojisOnLoad.length).toBe(5);


  const ostrichButton = screen.getByText(/Add ostrich/i);

  fireEvent.click(ostrichButton);
  fireEvent.click(ostrichButton);
  fireEvent.click(ostrichButton);
  fireEvent.click(ostrichButton);
  fireEvent.click(ostrichButton);
  fireEvent.click(ostrichButton);


  const emojisAfterClick = screen.getAllByText(/𓅦|🐆|🦏|🐃|🐘/i);

  expect(emojisAfterClick.length).toBe(11);

});

test('if the user types in the input, the zoo name should change to whatever they typed', () => {
  render(<App />);
  const greetingElementAtLoad = screen.getByText(/Welcome to Zoo Adventures, the App for animal lovers/i);


  //initially there should be one ostrich
  expect(greetingElementAtLoad).toBeInTheDocument();


  const inputEl = screen.getByPlaceholderText(/Type zoo name here/i);
  const zooName = 'The Great Zoo';

  fireEvent.change(inputEl, {
    target: {
      value: zooName,
    },
  });

  const afterTyping = screen.getByText(`Welcome to ${zooName}, the App for animal lovers`);
  expect(afterTyping).toBeInTheDocument();
  
});