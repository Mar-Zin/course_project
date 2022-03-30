import React from "react";

const Qualities = ({ user }) => {
  const classes = "badge m-2 bg-";
  return user.qualities.map((qualitie) => (
    <span key={qualitie._id} className={classes + qualitie.color}>
      {qualitie.name}
    </span>
  ));
};

export default Qualities;
