import React from "react";
import User from "./user";

const Users = ({ users, onDelete, bookmarkT, bookmarkF }) => {
  return users.map((user) => (
    <User
      key={user._id}
      user={user}
      onDelete={onDelete}
      bookmarkT={bookmarkT}
      bookmarkF={bookmarkF}
    />
  ));
};

export default Users;
