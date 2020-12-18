import React, {useState, useEffect, useRef} from 'react';

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form className="toDoForm" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
            <input
                placeholder="Update your item"
                value={input}
                name="text"
                className="toDoInputEdit"
                onChange={handleChange}
                ref={inputRef}
            />
            <button onClick={handleSubmit} className="toDoButtonEdit">Update</button>
            </>
        ) : (
            <> 
            <input
                placeholder="Add a todo"
                value={input}
                name="text"
                className="toDoInput"
                onChange={handleChange}
                ref={inputRef}
            />
            <button onClick={handleSubmit} className="toDoButton">Add todo</button>
            </>
            )}
            
        </form>
    );
}

export default ToDoForm;
