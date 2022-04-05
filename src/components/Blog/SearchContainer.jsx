import React from 'react'

function SearchContainer() {
    return (
        <div className="blog-form-part">
            <div className="form-wrapper">
                <form action="">
                    <input
                        className="field search-input"
                        name="search"
                        id="search"
                        type="text"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Search keyword'}
                        placeholder="Search keyword" />
                    <button type="submit" className="search-btn">SEARCH</button>
                </form>
            </div>
        </div>
    )
}

export default SearchContainer