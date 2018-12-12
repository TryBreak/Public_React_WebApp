import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

class TodoList extends Component {
  static propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      }).isRequired
    ).isRequired
  };
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => (
          <Todo
            {...todo}
            key={index}
            onClick={() => this.props.onTodoClick(index)}
          />
        ))}
      </ul>
    );
  }
}

// TodoList.propTypes = {};

export default TodoList;
