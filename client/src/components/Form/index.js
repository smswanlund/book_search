import React from "react";

function Form({query, handleInputChange, handleFormSubmit}) {
    return (
        <form>
            <div className="form-group">
                <label>
                    Book
                </label>
                <input
                    className="form-control"
                    id="title"
                    type="text"
                    value={query}
                    name="query"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="search">
                <button
                onClick={handleFormSubmit}
                type="submit"
                className="btn">
                    Search
                </button>
            </div>
        </form>
    );
}

export default Form;