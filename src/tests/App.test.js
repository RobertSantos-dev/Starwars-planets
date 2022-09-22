import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../App';

const elements = ['column-filter', 'comparison-filter', 'value-filter'];
const elementValue = ['diameter', 'maior que', '9000'];
const elementFilter = ['filter', 'button-remove-filters'];

describe('Tests', () => {
  test('01 - Testando se existe elementos', () => {
    render(<App />);
    const elementInput = screen.getByTestId(/name-filter/i);
    expect(elementInput).toBeInTheDocument();
  });

  test('02 - Testando se existe mais outros elementos', () => {
    render(<App />);

    elements.forEach((e) => {
      const element = screen.getByTestId(e);
      expect(element).toBeInTheDocument();
    });

    const btnElement = screen.getByTestId(/button-filter/i);
    expect(btnElement).toBeInTheDocument();
  });

  test('03 - Testando a funcionalidade do botão filter', () => {
    render(<App />);

    elements.forEach((e, i) => {
      const element = screen.getByTestId(e);
      expect(element).toBeInTheDocument();

      i < 2
      ? userEvent.selectOptions(element, elementValue[i])
      : userEvent.type(element, elementValue[i]);
    });

    const btnElement = screen.getByTestId(/button-filter/i);
    expect(btnElement).toBeInTheDocument();
    userEvent.click(btnElement);

    elementFilter.forEach((e) => {
      const element = screen.getByTestId(e);
      expect(element).toBeInTheDocument();
    });
  });
});