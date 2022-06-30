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


