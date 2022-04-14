import React, { useState, useEffect } from "react";
import { paginate } from "../api/utils/patinate";
import Pagination from "./pagination";
import User from "./user";
import SearchStatus from "./searchStatus";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import API from "../api";

const Users = ({ users: allUsers, onDelete, bookmark }) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProfs, setSelectedProfs] = useState();

    const handleProfessionSelect = (item) => {
        setSelectedProfs(item);
    };

    useEffect(() => {
        API.professions.fetchAll().then((data) => {
            setProfessions(data);
        });
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProfs]);

    const hadlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const clear = () => {
        setSelectedProfs();
    };

    const filteredUsers = selectedProfs
        ? allUsers.filter((user) => user.profession === selectedProfs)
        : allUsers;
    const count = filteredUsers.length;

    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProfs}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button className="btn btn-primary mt-2" onClick={clear}>
                        Очистить
                    </button>
                </div>
            )}

            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                {count > 0 && (
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
                            {userCrop.map((user) => (
                                <User
                                    key={user._id}
                                    user={user}
                                    onDelete={onDelete}
                                    bookmark={bookmark}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={hadlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array,
    onDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.func.isRequired
};

export default Users;
