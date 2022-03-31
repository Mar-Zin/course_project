import React, { useState } from "react";
import API from "./api/index";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const bookmark = (id) => {
    setUsers(
      users.map((user) =>
        user._id === id ? { ...user, bookmark: !user.bookmark } : { ...user }
      )
    );
  };

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((user) => user !== id));
  };

  if (users.length === 0) {
    return (
      <>
        <h2>
          <span className="badge bg-danger">Никто с тобой не тусанет</span>
        </h2>
      </>
    );
  } else
    return (
      <>
        <h2>
          <span className="badge bg-primary">
            {users.length + " "}
            <SearchStatus lenght={users.length} /> с тобой сегодня
          </span>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <Users users={users} onDelete={handleDelete} bookmark={bookmark} />
          </tbody>
        </table>
      </>
    );
};

export default App;
