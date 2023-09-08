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
        <button className="search-button" onClick={handleSearch}><img className="search-icon" src={search} />Search</button>{console.log(results)}
        {results && results.length > 0 ? (<div className='centered-content'>
          {error && <p>{error}</p>}
          <h3>Search Results:</h3>
          <div className='results-card'>

            <ul>
              {results.map((result, index) => (
                <a href={`https://torre.ai/${result.person.publicId}`} target='_blank'>
                  <li key={index}>
                    <h3 className='person-name'>{result.person.name}</h3>
                    <p className='person-professional'>{result.person.professionalHeadline}</p>
                  </li></a>
              ))}
            </ul>
          </div>
        </div>) : null}
      </div>
    </div>
  );
};

export default Search;
