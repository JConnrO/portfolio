import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Navbar from '..';

afterEach(cleanup);

describe('Navbar Component', () => {
    // Baseline Render Test
    test('renders', () => {
        render(<Navbar />)
    })
    //Snapshot Test
    test('snapshot', () => {
        const { asFragment } = render(<Navbar/>)
        expect(asFragment()).toMatchSnapshot();
    })
})
