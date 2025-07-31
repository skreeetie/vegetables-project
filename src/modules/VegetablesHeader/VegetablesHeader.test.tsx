import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../../test/render";
import { VegetablesHeader } from "./VegetablesHeader";
import "@testing-library/jest-dom";
import { userEvent } from "@testing-library/user-event";

describe("cart button", () => {
  it("click on cart button should open the popup", async () => {
    render(<VegetablesHeader />);
    expect(screen.queryByText(/Cart is empty/)).not.toBeInTheDocument();
    await userEvent.click(screen.getByText(/Cart/));
    expect(screen.getByText(/Cart is empty/)).toBeInTheDocument();
  });
});
