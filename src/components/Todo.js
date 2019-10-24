import React from "react";
import { connect } from "react-redux";

function Todo(props) {
  return (
    <li
      className="eachTodo"
      //   Style based on Completion
      style={
        props.todo.isComplete
          ? { opacity: ".2", textDecoration: "line-through" }
          : { opacity: "1", textDecoration: "none" }
      }
    >
      <small className="todoNum">{props.index}</small>
      <div
        className="todoHeads"
        onClick={() => {
          props.dispatch({ type: "COMPLETE_TODO", id: props.todo.id });
        }}
      >
        <h3>{props.todo.label}</h3>
        <button className="todoComplete">
          <i className="fas fa-check-circle" />
        </button>
      </div>
      <hr /> <p>{props.todo.message}</p>
      <small className="todoTime">added on : {props.todo.time}</small>
      <button
        className="deleteBtn"
        onClick={() =>
          props.dispatch({ type: "DELETE_TODO", id: props.todo.id })
        }
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </li>
  );
}
export default connect(
  null,
  null
)(Todo);
