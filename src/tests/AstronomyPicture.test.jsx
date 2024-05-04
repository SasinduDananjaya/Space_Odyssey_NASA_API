import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AstronomyPicture from '../pages/AstronomyPicture';

test('renders select date label', async () => {
    render(<AstronomyPicture />);
    const selectDateLabel = await screen.getByText(/Select Date/i);
    expect(selectDateLabel).toBeInTheDocument();
});

test('renders date picker with current date value', async () => {
    render(<AstronomyPicture />);
    const datePicker = await screen.getByDisplayValue(new Date().toISOString().split('T')[0]);
    expect(datePicker).toBeInTheDocument();
});
