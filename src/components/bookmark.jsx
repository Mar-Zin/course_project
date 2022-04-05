import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark, id, user }) => {
    return (
        <button onClick={() => bookmark(id)}>
            <i
                className={"bi bi-suit-heart" + (user.bookmark ? "-fill" : "")}
            ></i>
        </button>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};

export default Bookmark;
