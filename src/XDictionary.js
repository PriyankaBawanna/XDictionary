import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import React from 'react';

const XDictionary = () => {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const result = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    setDefinition(result ? result.meaning : "Word not found in the dictionary.");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">XDictionary</h2>
      <input
        type="text"
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
        placeholder="Enter a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
      {definition && (
        <div className="mt-4">
          {definition === "Word not found in the dictionary." ? (
            <p>{definition}</p>
          ) : (
            <>
              <h3 className="text-lg font-semibold">Definition:</h3>
              <p>{definition}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};


export default XDictionary