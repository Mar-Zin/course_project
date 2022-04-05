import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const lastNumber = Number(String(length).slice(-1));
    const secondNumber = Number(String(length).slice(-2, -1));

    return length === 0 ? (
        <h2>
            <span className="badge bg-danger">Никто с тобой не тусанет</span>
        </h2>
    ) : (
        <h2>
            <span className="badge bg-primary">
                {length}
                {(lastNumber === 2 || lastNumber === 3 || lastNumber === 4) &&
                secondNumber !== 1
                    ? " человека тусанут "
                    : " человек тусанет "}
                с тобой сегодня
            </span>
        </h2>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
