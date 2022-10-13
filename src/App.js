import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Button from "./component/Button/Button";
import data from "../src/utils/data";
import { useState } from "react";

// console.log(data);

function App() {
  const [page, setPage] = useState(1);
  const [usersPerPage] = useState(5);

  const indexOfLastUser = page * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);
  return (
    <div className="App">
      <Header
        indexOfFirstUser={indexOfFirstUser}
        indexOfLastUser={indexOfLastUser}
      />
      {currentUsers.map((employees, id) => (
        <Main key={id} employees={employees} />
      ))}

      <Button setPage={setPage} usersPerPage={usersPerPage} page={page} />
    </div>
  );
}

export default App;
