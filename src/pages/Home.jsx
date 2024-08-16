import React, { useState } from "react";
import TodoTable from "../components/TodoTable";

function Home() {
  const [data, setData] = useState([
    {
      sn: 5,
      id: "lzw0hx6r",
      title: "Good day",
      body: "First live testing and now updating",
      completed: 0,
      dueDate: "2024-08-31T00:00:00.000Z",
      createdDate: "2024-08-16T01:09:41.000Z",
      userID: "lzw0h3ub",
    },
    {
      sn: 6,
      id: "lzw9385i",
      title: "Creating new",
      body: "Checking the time",
      completed: null,
      dueDate: "2024-08-28T00:00:00.000Z",
      createdDate: "2024-08-16T05:10:12.000Z",
      userID: "lzw0h3ub",
    },
  ]);
  const date = new Date().toISOString().split("T")[0];
  console.log(date);
  return (
    <div className="home">
      <h1 className="header">
        <div className="logo">Todo-App</div>
        <div className="date">{date}</div>
      </h1>
      <div className="mainContent">
        <TodoTable data={data} />
      </div>
    </div>
  );
}

export default Home;
