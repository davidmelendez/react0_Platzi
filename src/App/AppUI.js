import React from 'react';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoCounter'
import { TodoList } from '../TodoList'; 
import { TodoCreateBtn } from '../TodoCreateBtn';
import { TodoItem } from '../TodoItem';
import { TodoClick } from '../TodoClick';

import '../index.css';

function AppUI({
    completedTodos,
    totalTodos,
    txtBuscar,
    settxtBuscar,
    searchedTodo,
    completeTodo,
    unCompleteTodo
}){
    return (
        <React.Fragment>
          <TodoClick></TodoClick>
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch txtBuscar={txtBuscar} settxtBuscar={settxtBuscar} />
    
          <TodoList>
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
    
          <TodoCreateBtn />
          {/* coments   */}
        </React.Fragment>
      );
}

export default AppUI;