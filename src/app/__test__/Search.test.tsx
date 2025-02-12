import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../Search';

describe('Search Component', () => {
    const mockHandleOnChange = jest.fn();

    it('should render the input element', () => {
        render(<Search searchQuery="" handleOnchange={mockHandleOnChange} />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    });

    it('should display the correct initial value', () => {
        render(<Search searchQuery="testing" handleOnchange={mockHandleOnChange} />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveValue('testing');
    });

    it('should call handleOnchange when input value changes', () => {
        render(<Search searchQuery="" handleOnchange={mockHandleOnChange} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'test' } });
        expect(mockHandleOnChange).toHaveBeenCalledTimes(1);
    });
});