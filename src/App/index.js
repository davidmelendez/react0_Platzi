
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

import AppUI from './AppUI';

// const itemsTodo = [
//   {text: 'Todo A', completed: false},
//   {text: 'Todo B', completed: false},
//   {text: 'Todo C', completed: false},
//   {text: 'Todo D', completed: false},
//   {text: 'Todo E', completed: false},
// ];

// localStorage.setItem('TODOS',JSON.stringify(itemsTodo));
//localStorage.removeItem('TODOS');

function App() {
  

  //estado todos
  //estado de lista de todos
  const [todoList, saveTodos] = useLocalStorage("TODOS",[]);

  //estado disparador al buscar un todo
  const [txtBuscar, settxtBuscar] = React.useState("");

  //estado disparador todo completado
  const [todos, settodos] =useLocalStorage("TODOS",[]);

  //estados derivados
  const completedTodos = todoList.filter((todo) => !!todo.completed).length;
  const totalTodos = todoList.length;

  const searchedTodo = todoList.filter((todo) => {
    return todo.text.toUpperCase().includes(txtBuscar.toUpperCase());
  });



  const completeTodo = (text) => {
    //creamos una copia de los todos
    //ecma, javascript
    const newTodos = [...todoList];
    let indexTodos = 0;

    indexTodos = newTodos.findIndex((todo) => todo.text === text);

    if (newTodos[indexTodos].completed) {
      newTodos[indexTodos].completed = false;
    } else {
      newTodos[indexTodos].completed = true;
    }
    //settodoList(newTodos);
    saveTodos(newTodos);
  };

  const unCompleteTodo = (text) => {
    let newTodos = [...todoList];
    newTodos = newTodos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
    //settodoList(newTodos);
  };

  return (
    <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    txtBuscar={txtBuscar}
    settxtBuscar={settxtBuscar}
    searchedTodo={searchedTodo}
    completeTodo={completeTodo}
    unCompleteTodo={unCompleteTodo}
    
    />
  );
}








export default App;
