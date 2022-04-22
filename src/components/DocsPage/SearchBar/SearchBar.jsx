import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState(null);

    const handleOnChange = (value) => {
        setSearchQuery(value);
    }

    const handleOnSubmit = () => {

    }

    const link = "https://thepolaroidapi.com/"
    return (
        <form
            onChange={() => handleOnChange}
            onSubmit={() => handleOnSubmit}
        >
            <fieldset>
                <label id="link-text" htmlFor="api-method">{link}</label>
                <input id="api-method" type="text" name="api-method"></input>
                <button>Submit</button>
            </fieldset>
        </form>
    );
}

export default SearchBar;