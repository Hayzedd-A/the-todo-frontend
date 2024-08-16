import React, { useEffect, useState } from "react";
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";
const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;
const TodoTable = ({ data }) => {
  console.log(data);
  return (
    <List className="todoList">
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
      >
        {item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<input type="checkbox" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.body}
            />
            <div>{item.dueDate}</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
export default TodoTable;
