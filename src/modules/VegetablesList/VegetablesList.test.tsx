import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../../test/render";
import { VegetablesList } from "./VegetablesList";
import "@testing-library/jest-dom";

describe("correct render", () => {
  it("should correctly render the page", () => {
    render(<VegetablesList />);
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
