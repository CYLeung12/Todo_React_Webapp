// useState hook can add state functionality in component
import React, { useState } from "react";
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from "./components/NewTodoForm";

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed cat", rowAssigned: "User1" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User2" },
    { rowNumber: 3, rowDescription: "Make dinners", rowAssigned: "User1" }
  ])

  // An arrow function saved as a const
  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = { rowNumber: rowNumber, rowDescription: description, rowAssigned: assigned }
    // call the setTodos() to restructure a newly updated todos array, so the page will re-render
    setTodos(todos => [...todos, newTodo])
  }

  const deletTodo = (deleteTodoRowNumber) => {
    // created an new array to store the filltered items
    let filtered = todos.filter(function (todo) {
      return todo.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }


  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          {/* pass the todos array and deletTodo function to sub-component as property */}
          <TodoTable todos={todos} deletTodo={deletTodo} />
          {/* setShowAddTodoForm(!showAddTodoForm) set it to the opposite of showAddTodoForm (opened->collapsed / collapsed->opened) */}
          <button className="btn btn-primary" onClick={() => setShowAddTodoForm(!showAddTodoForm)} >
            {showAddTodoForm ? "Close New Todo" : "New Todo"}
          </button>
          {/* Conditional rendering */}
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}

        </div>
      </div>


    </div>
  );
}

export default App;
