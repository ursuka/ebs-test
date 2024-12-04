import App from "../../App";
import {render, screen} from "@testing-library/react";


it("app", () => {
    render(<App/>);
    const logoList = screen.getAllByText(/Product Catalog/i)
    expect(logoList).toBe(2)
});

