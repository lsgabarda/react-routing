
import React, { useState } from 'react'


function Todo() {
    const [items, setItems] = useState([
    ])

    const addTodo = (text) => {
        const newTodos = [...items, { text }];
        setItems(newTodos);
    }

    function removeTodo(index) {
        const newTodos = [...items];
        newTodos.splice(newTodos, 1);
        setItems(newTodos);
    }



    return (
        <div>
            <TodoForm addTodo={addTodo} />
            {items.map((item, index) => (
                <TodoList
                    key={index}
                    item={item}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    )
}

function TodoList({ item, index, removeTodo }) {
    return (
        <div>
            <ul>
                <span>
                    {item.text}
                </span>
                <span>
                    <button onClick={() => removeTodo(index)}>Remove</button>
                </span>
            </ul>
        </div>

    )
}



function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");


    function buttonHandler(e) {
        e.preventDefault()
        if (!value) return;
        addTodo(value)
        setValue("")
    }
    return (
        <div>
            <input type="text" placeholder="Enter Todo.." value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={buttonHandler}>Add Todo</button>
        </div>

    )
}

export default Todo