import TodoRowItem from "./TodoRowItem"

function TodoTable(props){
    return(
        <table className="table table-hover">
        <thead>
          <tr >
            <th scope='col'>#</th>
            <th scope='col'>Description</th>
            <th scope='col'>Assigned</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>

{/* !!!important as it's commonly used, map() method to every item in todos array */}
{props.todos.map(todo=> (
    //  pass the property (key-value pair) to child component TodoRowItem.js
    <TodoRowItem
    key={todo.rowNumber}
    rowNumber={todo.rowNumber}
    rowDescription={todo.rowDescription}
    rowAssigned={todo.rowAssigned} 
    deletTodo={props.deletTodo}
    />
))}
        </tbody>
        </table>
    )
}

export default TodoTable