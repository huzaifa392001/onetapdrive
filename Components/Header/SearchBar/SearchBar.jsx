import React from 'react'
import Form from 'next/form'

function SearchBar() {
    return (
        <Form>
            <div className="inputCont withBtn">
                <input type="text" placeholder='Search' />
                <button>
                    <i className="fas fa-search" />
                </button>
            </div>
        </Form>
    )
}

export default SearchBar