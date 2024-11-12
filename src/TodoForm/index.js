import React from "react";
import { TodoContext } from "../Context";
import './TodoForm.css'

function TodoForm(){
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);

    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Meeting at 11 oclock" value={newTodoValue} onChange={onChange}></textarea>
            <div className="TodoForm-buttonContainer">
            <button className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
            <button className="TodoForm-button TodoForm-button--add">Agregar</button>
            </div>
        </form>
    );
}

export {TodoForm};