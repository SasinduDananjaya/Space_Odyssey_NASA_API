import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import NasaEpicViewer from '../pages/EpicPage';

describe('NasaEpicViewer', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () =>
            Promise.resolve([
                {
                caption: 'Test caption',
                image: 'test-image',
                },
            ]),
        })
        );
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('renders date input with initial date value', () => {
        render(<NasaEpicViewer />);
        const dateInput = screen.getByDisplayValue('2019-05-30');
        expect(dateInput).toBeInTheDocument();
    });

    test('renders next image when next button is clicked', async () => {
        render(<NasaEpicViewer />);
        const nextButton = screen.getByText('>');
        fireEvent.click(nextButton);

        const image = await screen.findByAltText('NASA EPIC');
        expect(image.src).toContain('test-image');
    });

    test('renders previous image when previous button is clicked', async () => {
        render(<NasaEpicViewer />);
        const nextButton = screen.getByText('>');
        const prevButton = screen.getByText('<');
        fireEvent.click(nextButton); // Move to the next image
        fireEvent.click(prevButton); // Move back to the previous image

        const image = await screen.findByAltText('NASA EPIC');
        expect(image.src).toContain('test-image');
    });

    test('toggles autoplay when autoplay button is clicked', async () => {
        render(<NasaEpicViewer />);
        const autoplayButton = screen.getByText('Start Autoplay');
        fireEvent.click(autoplayButton);

        const stopAutoplayButton = screen.getByText('Stop Autoplay');
        expect(stopAutoplayButton).toBeInTheDocument();
    });
});

