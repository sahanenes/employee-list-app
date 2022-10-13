import React from "react";
import data from "../../utils/data";
import "./button.scss";

const Button = ({ setPage, usersPerPage, page }) => {
  const currentUserCount = data.length / usersPerPage;
  const prev = () => {
    page < 2 ? setPage(currentUserCount) : setPage(page - 1);
  };
  const next = () => {
    page === currentUserCount
      ? setPage(page === currentUserCount)
      : setPage(page + 1);
  };

  return (
    <div>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Button;
