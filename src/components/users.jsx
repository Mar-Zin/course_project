import React, { useState } from "react";
import API from "../api";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((row) => row !== id));
  };

  const classes = "badge m-2 bg-";
  const renderQualities = (row) => {
    return row.qualities.map((item) => (
      <span key={item._id} className={classes + item.color}>
        {item.name}
      </span>
    ));
  };

  const renderTr = () => {
    return users.map((row) => (
      <tr key={row._id}>
        <td>{row.name}</td>
        <td>{renderQualities(row)}</td>
        <td>{row.profession.name}</td>
        <td>{row.completedMeetings}</td>
        <td>{row.rate} /5</td>
        <td>
          <button className="btn btn-danger" onClick={() => handleDelete(row)}>
            delete
          </button>
        </td>
      </tr>
    ));
  };

  const renderPhrase = (number) => {
    const lastNumber = Number(String(number).slice(-1));
    const secondNumber = Number(String(number).slice(-2, -1));

    if (
      (lastNumber === 2 || lastNumber === 3 || lastNumber === 4) &&
      secondNumber !== 1
    ) {
      return "человека тусанут";
    } else return "человек тусанет";
  };

  if (users.length === 0) {
    return (
      <>
        <h2>
          <span className="badge bg-danger">Никто с тобой не тусанет</span>
        </h2>
      </>
    );
  }

  return (
    <>
      <h2>
        <span className="badge bg-primary">
          {users.length + " " + renderPhrase(users.length)} с тобой сегодня
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
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderTr()}</tbody>
      </table>
    </>
  );
};

export default Users;
