import { render, screen, fireEvent } from "@testing-library/react";
import XDictionary from "./XDictionary"; // Adjust the import path if needed
import "@testing-library/jest-dom";
import React from "react";

describe("Dictionary App Component Tests", () => {
  
  test("Initial Render Tests", () => {
    render(<XDictionary />);

    // Verify heading is present
    expect(screen.getByText("XDictionary")).toBeInTheDocument();

    // Verify input field exists
    expect(screen.getByPlaceholderText("Enter a word...")).toBeInTheDocument();

    // Verify search button exists
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  test("Input Field Tests", () => {
    render(<XDictionary />);
    const input = screen.getByPlaceholderText("Enter a word...");

    // Simulate typing "React"
    fireEvent.change(input, { target: { value: "React" } });

    // Check if input field updates correctly
    expect(input).toHaveValue("React");
  });

  test("Search Functionality Tests", () => {
    render(<XDictionary />);
    const input = screen.getByPlaceholderText("Enter a word...");
    const button = screen.getByText("Search");

    // Search for "Component"
    fireEvent.change(input, { target: { value: "Component" } });
    fireEvent.click(button);

    // Check if definition appears
    expect(screen.getByText("Definition:")).toBeInTheDocument();
    expect(
      screen.getByText("A reusable building block in React.")
    ).toBeInTheDocument();
  });

  test("Button Functionality Tests", () => {
    render(<XDictionary />);
    const button = screen.getByText("Search");

    // Check if button is enabled
    expect(button).toBeEnabled();
  });

  test("No Search Term Tests", () => {
    render(<XDictionary />);
    const button = screen.getByText("Search");

    // Click search without typing anything
    fireEvent.click(button);

    // Expect "Word not found in the dictionary." message
    expect(screen.getByText("Word not found in the dictionary.")).toBeInTheDocument();
  });

  test("User Interface Tests", () => {
    render(<XDictionary />);

    // Check if key UI elements exist
    expect(screen.getByText("XDictionary")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter a word...")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

});
