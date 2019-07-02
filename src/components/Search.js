import React from 'react';
import './Search.css';

const Search = ({ query }) => {
  return (
    <div className="search">
      <input 
        query={query}
      />
    </div>
  );
}

export default Search;