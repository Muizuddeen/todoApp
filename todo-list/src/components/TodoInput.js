import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
       <div className="form-input">
        <form onSubmit={handleSubmit}>
        <h6>Add Item</h6>
          <div className= "input-group">
            <input
              type="text"
              className="input-text text-capitalize"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-success mt-3"
                : "btn btn-primary mt-3"
            }
          >
            {editItem ? "edit item" : "Submit"}
          </button>
        </form>
</div>
    );
  }
}
