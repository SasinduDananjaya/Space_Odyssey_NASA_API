import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useQuery } from '@tanstack/react-query';
import RoverPage from '../pages/RoverPage';

// Mock the useQuery hook to return mock data
jest.mock('@tanstack/react-query', () => ({
    ...jest.requireActual('@tanstack/react-query'),
    useQuery: jest.fn(),
}));

describe('RoverPage', () => {
    const mockData = [
        {
        img_src: 'https://example.com/image.jpg',
        camera: { full_name: 'Camera Name' },
        earth_date: '2024-05-04',
        },
    ];

    beforeEach(() => {
        useQuery.mockReturnValue({
        error: null,
        isLoading: false,
        data: mockData,
        });
    });

    test('renders select camera label', () => {
        render(<RoverPage />);
        const selectCameraLabel = screen.getByText(/Select Camera/i);
        expect(selectCameraLabel).toBeInTheDocument();
    });

    test('calls handleChange when camera selection changes', async () => {
        render(<RoverPage />);
        const selectElement = screen.getByRole('combobox');
        await userEvent.selectOptions(selectElement, 'FHAZ');
        expect(selectElement.value).toBe('FHAZ');
    });

});
