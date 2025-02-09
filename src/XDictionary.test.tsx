import { render, screen, fireEvent } from "@testing-library/react";
import XDictionary from "./XDictionary"; // Adjust the import path if needed
import "@testing-library/jest-dom";
import React from "react";

describe("Dictionary App Component Tests", () => {
  
  



    test("should show an error message when search is clicked without input", () => {
        render(<XDictionary />);
    
        // Ensure the search input is empty
        const input = screen.getByPlaceholderText("Enter a word...");
        fireEvent.change(input, { target: { value: "" } });
    
        // Click the search button
        const button = screen.getByText("Search");
        fireEvent.click(button);
    
        // Check if the "Word not found" message appears
        expect(screen.getByText("Word not found in the dictionary.")).toBeInTheDocument();
      });
});
