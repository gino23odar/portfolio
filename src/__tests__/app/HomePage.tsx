import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";


describe('rendering of home page', () => {

    const setup = () => {render(<HomePage />)};

    it('reders home page', () => {
        setup();
        expect(screen.getByText('Welcome to Next.js!')).toBeInTheDocument();
    });
});
