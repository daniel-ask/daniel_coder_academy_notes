import React from "react";
import { render, screen } from "@testing-library/react";

import FindByExample from "./FindByExample";

describe("FindByExample", () => {
  test("renders FindByExample component", async () => {
    render(<FindByExample />);

    // wait for the user to resolve
    // needs only be used in our special case
    // await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    // screen.debug();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

    // screen.debug();
  });
});
