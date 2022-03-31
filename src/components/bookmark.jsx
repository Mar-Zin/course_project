import React from "react";

const Bookmark = ({ bookmark, id, user }) => {
  return (
    <button onClick={() => bookmark(id)}>
      <i className={"bi bi-suit-heart" + (user.bookmark ? "-fill" : "")}></i>
    </button>
  );
};

export default Bookmark;
