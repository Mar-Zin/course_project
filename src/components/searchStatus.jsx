import React from "react";

const SearchStatus = ({ lenght }) => {
  const lastNumber = Number(String(lenght).slice(-1));
  const secondNumber = Number(String(lenght).slice(-2, -1));

  return (lastNumber === 2 || lastNumber === 3 || lastNumber === 4) &&
    secondNumber !== 1
    ? "человека тусанут"
    : "человек тусанет";
};

export default SearchStatus;
