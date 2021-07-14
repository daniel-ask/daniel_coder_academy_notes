import { render, screen, cleanup, act } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import PriceLookUp from "./PriceLookUp";
import renderer from "react-test-renderer";

jest.mock("axios");

describe("PriceLookUp", () => {
  afterEach(cleanup);
  // beforeEach(() => {render(<PriceLookUp />)})

  test("should have the correct title", () => {
    render(<PriceLookUp />);
    expect(screen.getByText(/Search for Games/i)).toBeInTheDocument();
  });

  test("fetches games from an API and displays them", async () => {
    const games = [
      { external: "batman", cheapest: 10.0 },
      { external: "batman 2", cheapest: 5.0 },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve({ data: games }));

    render(<PriceLookUp />);
    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    const items = await screen.findAllByRole("listitem");
    const message = screen.queryByText(/No Match Found/i);

    expect(items).toHaveLength(2);
    expect(message).toBeNull();
  });

  test("fetches games from the api but with no result", async () => {
    const games = [];
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: games }));

    render(<PriceLookUp />);
    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });
    const message = await screen.findByText(/No Match Found/i);
    expect(message).toBeInTheDocument();
  });

  test("fetches stories from an API and fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<PriceLookUp />);
    await act(async () => {
      // await userEvent.type(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole("button"));
    });

    const message = await screen.findByText(/Error/);

    expect(message).toBeInTheDocument();
  });

  it("should match last snapshot", () => {
    const tree = renderer.create(<PriceLookUp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


