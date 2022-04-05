import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, onDelete, bookmark }) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>
                <Qualities user={user} />
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate} /5</td>
            <td>
                <Bookmark bookmark={bookmark} id={user._id} user={user} />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(user)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.func.isRequired
};

export default User;
