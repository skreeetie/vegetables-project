import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../../test/render";
import { Vegetable } from "./Vegetable";
import "@testing-library/jest-dom";
import { userEvent } from "@testing-library/user-event";

describe("vegetable card", () => {
  const vegetable = {
    id: 1,
    name: "Brocolli - 1 Kg",
    price: 120,
    image:
      "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
  };
  it("card should correctly render product's info", () => {
    render(
      <Vegetable
        id={vegetable.id}
        name={vegetable.name}
        price={vegetable.price}
        image={vegetable.image}
      />
    );
    expect(screen.getByText(/Brocolli/i)).toBeInTheDocument();
  });
  it("amount of product should correctly increase within clicking", async () => {
    render(
      <Vegetable
        id={vegetable.id}
        name={vegetable.name}
        price={vegetable.price}
        image={vegetable.image}
      />
    );
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue("1");
    await userEvent.click(screen.getByTestId("add"));
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue("2");
  });
  it("amount of product should correctly decrease within clicking", async () => {
    render(
      <Vegetable
        id={vegetable.id}
        name={vegetable.name}
        price={vegetable.price}
        image={vegetable.image}
      />
    );
    await userEvent.click(screen.getByTestId("add"));
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue("2");
    await userEvent.click(screen.getByTestId("subtract"));
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue("1");
  });
  it("price should change within changing amount", async () => {
    render(
      <Vegetable
        id={vegetable.id}
        name={vegetable.name}
        price={vegetable.price}
        image={vegetable.image}
      />
    );
    expect(screen.getByText(/\$/)).toHaveTextContent("$ 120");
    await userEvent.click(screen.getByTestId("add"));
    expect(screen.getByText(/\$/)).toHaveTextContent("$ 240");
    await userEvent.click(screen.getByTestId("subtract"));
    expect(screen.getByText(/\$/)).toHaveTextContent("$ 120");
  });
  it("input should correctly change amount", async () => {
    render(
      <Vegetable
        id={vegetable.id}
        name={vegetable.name}
        price={vegetable.price}
        image={vegetable.image}
      />
    );
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue("1");
    await userEvent.type(screen.getByRole("spinbutton"), "{backspace}3");
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue("3");
  });
  it("input value should be only numbers", async () => {
    render(
      <Vegetable
        id={vegetable.id}
        name={vegetable.name}
        price={vegetable.price}
        image={vegetable.image}
      />
    );
    await userEvent.type(screen.getByRole("spinbutton"), "{backspace}");
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue("");
    await userEvent.type(screen.getByRole("spinbutton"), "text");
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue("");
  });
});
