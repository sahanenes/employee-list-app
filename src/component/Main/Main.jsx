import React from "react";
import "./main.scss";

const Main = ({ employees }) => {
  const { id, name, age, image, email } = employees;

  return (
    <div className="card">
      <div className="imgDiv">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default Main;
