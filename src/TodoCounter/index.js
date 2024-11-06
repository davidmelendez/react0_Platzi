import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../Context';

function TodoCounter(){
  //uso del contexto
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext)    
  
  return (
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h1>
    );
  }

  export {TodoCounter}