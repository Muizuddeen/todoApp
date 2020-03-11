import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, handleDelete, handleEdit } = this.props;
    return (
      <div className="items-list">
      <ul className="list-group my-1">
        <h6 className="text-capitalize">items list</h6>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

      </ul>
      </div>
    );
  }
}
