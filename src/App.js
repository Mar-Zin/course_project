import React, { useEffect, useState } from "react";
import API from "./api/index";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.users.fetchAll().then((data) => {
            setUsers(data);
        });
    }, []);

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
        <div>
            <Users
                users={users}
                onDelete={handleDelete}
                bookmark={handleOnToggle}
            />
        </div>
    );
};

export default App;
