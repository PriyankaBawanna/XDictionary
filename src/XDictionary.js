import { useState } from "react";

const XDictionary = () => {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    const trimmedSearch = searchTerm.trim().toLowerCase();
  
    if (!trimmedSearch) {
      setDefinition(""); // Clear previous results
      setError("Please enter a word to search."); // Show error message
      return;
    }
  
    setError(""); // Clear any previous error
  
    const result = dictionary.find((entry) => entry.word.toLowerCase() === trimmedSearch);
    setDefinition(result ? result.meaning : "Word not found in the dictionary.");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">Dictionary App</h2>
      
    
   
      <input
        id="search-input"
        type="text"
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 transition"
        onClick={handleSearch}
        disabled={!searchTerm.trim()} 
      >
        Search
      </button>
      
      <h3 className="text-lg font-semibold">Definition:</h3>
      <p>{definition ? definition : error}</p>
    </div>
  );
};

export default XDictionary;
