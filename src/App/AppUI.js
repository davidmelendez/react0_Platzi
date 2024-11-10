import React from 'react';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoCounter'
import { TodoList } from '../TodoList'; 
import { TodoCreateBtn } from '../TodoCreateBtn';
import { TodoItem } from '../TodoItem';
import { TodoClick } from '../TodoClick';
import { TodoContext } from '../Context';
import { Modal } from '../Modal';
import '../index.css';

function AppUI(){

  const {
    // loading,
    // error,
    completedTodos,
    totalTodos,
    txtBuscar,
    settxtBuscar,
    searchedTodo,
    completeTodo,
    unCompleteTodo,
    openModal

  } = React.useContext(TodoContext);

    return (
        <React.Fragment>
          <TodoClick></TodoClick>
          <TodoCounter/>
          <TodoSearch/>
    
   
              <TodoList>
              {/* {loading && <p>Estamos cargando...</p>}
              {error && <p>Error...</p>}
              {(!loading && searchedTodo.length == 0) && <p>No hay TODOS pendientes...</p>} */}
              {searchedTodo.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onUnComplete={() => unCompleteTodo(todo.text)}
                />
              ))}
            </TodoList>
      
    
       

          {openModal && (
              <Modal>
                Aqui va un formulario, seguro un componente
              </Modal>
          )}
             <TodoCreateBtn  />

          {/* coments   */}
        </React.Fragment>
      );
}

export default AppUI;