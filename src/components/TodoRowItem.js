function TodoRowItem(props) {

    return (
        //you can only have one parent element, i.e. in this example we can't have two <tr> pairs but we can have a <div> pair wrapping the two <tr> pairs 
        <tr className="align-middle">
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
            <td><button className="btn btn-danger" onClick={() => props.deletTodo(props.rowNumber)}>Delete</button></td>
        </tr>
    )

}

export default TodoRowItem