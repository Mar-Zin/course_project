import React, { useState } from "react";
import API from "./api/index";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());

    const handleOnToggle = (id) => {
        setUsers(
            users.map((user) =>
                user._id === id
                    ? { ...user, bookmark: !user.bookmark }
                    : { ...user }
            )
        );
    };

    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter((user) => user !== id));
    };

    return (
        <>
            <SearchStatus length={users.length} />
            <Users
                users={users}
                onDelete={handleDelete}
                bookmark={handleOnToggle}
            />
        </>
    );
};

export default App;
