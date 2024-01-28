// SearchContext.js
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const updateSearchQuery = (newQuery) => {
        setSearchQuery(newQuery);
    };

    return (
        <SearchContext.Provider value={{ searchQuery, updateSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};

const useSearch = () => {
    return useContext(SearchContext);
};

export { SearchProvider, useSearch };
