import { render, screen } from '@testing-library/react';
import AnimalEmoji from './AnimalEmoji';




test('if we pass an elephant to AnimalEmoji, it renders an elephant emoji', () => {
  render(<AnimalEmoji animal='elephant'/>);
  const elephantElement = screen.getByText('🐘');
  expect(elephantElement).toBeInTheDocument();
});


test('if we pass an buffalo to AnimalEmoji, it renders an buffalo emoji', () => {
  render(<AnimalEmoji animal='buffalo'/>);
  const buffaloElement = screen.getByText('🐃');
  expect(buffaloElement).toBeInTheDocument();
});

test('if we pass an rhino to AnimalEmoji, it renders an rhino emoji', () => {
  render(<AnimalEmoji animal='rhino'/>);
  const rhinoElement = screen.getByText('🦏');
  expect(rhinoElement).toBeInTheDocument();
});


test('if we pass an leopard to AnimalEmoji, it renders an leopard emoji', () => {
  render(<AnimalEmoji animal='leopard'/>);
  const leopardElement = screen.getByText('🐆');
  expect(leopardElement).toBeInTheDocument();
});

test('if we pass an ostrich to AnimalEmoji, it renders an ostrich emoji', () => {
  render(<AnimalEmoji animal='ostrich'/>);
  const ostrichElement = screen.getByText('𓅦');
  expect(ostrichElement).toBeInTheDocument();
});

test('if we pass an invalid animal to AnimalEmoji, it should render an empty div', () => {
  render(<AnimalEmoji animal='lion'/>);
  const ostrichElement = screen.queryByText(/𓅦|🐘|🐃| 🦏| 🐆/i);
//getByText - blows up if it finds nothing
//queryByText - returns null if it finds nothing
//findByText - lets you do async stuff

  expect(ostrichElement).not.toBeInTheDocument();
});

test('if we pass an ostrich to AnimalEmoji, it renders an ostrich emoji', () => {
  render(<>
    <AnimalEmoji animal='ostrich'/>
    <AnimalEmoji animal='ostrich'/>
  </>
  );
  const ostrichElements = screen.getAllByText(/𓅦/i);
  expect(ostrichElements.length).toBe(2);
});

