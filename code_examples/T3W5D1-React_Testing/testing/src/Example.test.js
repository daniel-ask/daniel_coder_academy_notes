import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Example from "./Example";

describe("Example", () => {
  test("renders Example component", async () => {
    render(<Example />);
    // screen.debug();
    // screen.getByText('Search:');
    // fails
    // expect(screen.getByText('Search')).toBeInTheDocument();

    // // succeeds
    // expect(screen.getByText('Search:')).toBeInTheDocument();

    // // succeeds
    // expect(screen.getByText(/Search/)).toBeInTheDocument();
    // expect(screen.getByText("Search:")).toBeInTheDocument();
    // screen.getByRole('');
    // screen.debug();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    // screen.debug();

    // fireEvent.change(screen.getByRole('textbox'), {
    //   target: { value: 'JavaScript' },
    // });
		
		await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
		expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();

    // screen.debug();
  });
});
