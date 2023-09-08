import React, { useState } from 'react';
import search from '../assets/search.svg'
import '../styles/Search.css';

const Search = () => {
  const [username, setUsername] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/bios/${username}`);
      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResults([data]);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching data from the server');
      setResults([]);
    }
  };

  return (
    <div>
      <div className='center-content'>
        <input
          className='search-input centered-content'
          type="text"
          placeholder="Search people by name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}><img className="search-icon" src={search} />Search</button>
        {results ? null : (<div className='centered-content'>
          {error && <p>{error}</p>}
          <h2>Search Results:</h2>
          <ul>
            {results.map((result) => (
              <li key={result.index}>
                <h3>{result.name}</h3>
                <p>{result.professionalHeadline}</p>
              </li>
            ))}
          </ul>
        </div>)}
      </div>
    </div>
  );
};

export default Search;
