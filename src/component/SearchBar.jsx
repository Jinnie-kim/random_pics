import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const getUserInput = (e) => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Search by..." value={term} onChange={getUserInput} />
      </form>
    </>
  );
}

export default SearchBar;
