import React from "react";
import User from "./user";

const Users = ({ users, onDelete, bookmark }) => {
  return users.map((user) => (
    <User key={user._id} user={user} onDelete={onDelete} bookmark={bookmark} />
  ));
};

export default Users;
