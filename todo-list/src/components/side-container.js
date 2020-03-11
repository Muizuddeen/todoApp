import React, { Component } from "react";
const SideContainer = ({clearList}) => (
  <div className="side-container d-flex align-items-center">
   <span
      className="table table-bordered"
      onClick={clearList}
    ><i className="fas fa-trash mx-3" />
      Trash
    </span>
    </div>
);
export default SideContainer;
