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
                <input
                    type="text"
                    placeholder="Search by..."
                    value={term}
                    onChange={getUserInput}
                    className="w-full h-[70px] pl-3 border-solid border-2 rounded-2xl text-[25px]"
                />
            </form>
        </>
    );
}

export default SearchBar;
