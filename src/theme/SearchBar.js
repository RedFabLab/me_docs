import React from 'react';
import SearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props) {
  console.log('Rendering SearchBarWrapper');
  return (
    <div className="search-bar-wrapper">
      <SearchBar {...props} />
    </div>
  );
}
