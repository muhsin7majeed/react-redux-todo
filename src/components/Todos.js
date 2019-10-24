import React, { Component } from "react";

import { connect } from "react-redux";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

class Test extends Component {
  render() {
    const todoCount = this.props.todos.length;
    const todo = this.props.todos.map((todo, index) => (
      <Todo key={todo.id} todo={todo} index={index + 1} />
    ));
    return (
      <>
        <h2 className="mainHeader">Todo List App with React & Redux</h2>
        <AddTodo status={this.props.todoStatus} />
        <div className="todos">
          <h1 className="todosHead">
            Todos <span>{todoCount}</span>
          </h1>
          <ul>{todo}</ul>
        </div>
      </>
    );
  }
}

// Gets state required for the component
const mapStateToProps = state => {
  return {
    todos: state.todos,
    todoStatus: state.todoStatus
  };
};

// Connecting State to this Component
export default connect(mapStateToProps)(Test);
