import React from "react";

import "./app-header.css";

const AppHeader = ({ toDo, Done }) => {
  return (
    <div className="app-header d-flex">
      <h1>My ToDo List</h1>
      <h2>
        {toDo} more to do, {Done} done
      </h2>
    </div>
  );
};

export default AppHeader;
