import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./actions";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

class App extends Component {
  logFun = text => {
    console.log("add todo", text);
  };
  render() {
    return (
      <div>
        <AddTodo onAddClick={text => this.logFun(text)} />
        <TodoList
          todos={[
            {
              text: "Use Redux",
              completed: true
            },
            {
              text: "Learn to connect it to React",
              completed: false
            }
          ]}
          onTodoClick={todo => console.log("todo clicked", todo)}
        />
        <Footer
          filter="SHOW_ALL"
          onFilterChange={filter => console.log("filter change", filter)}
        />
      </div>
    );
  }
}
function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return filter;
  }
}
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}
export default connect(select)(App);
