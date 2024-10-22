import logo from './platzi.webp';

import { TodoSearch } from './TodoSearch';
import { TodoCounter } from './TodoCounter'
import { TodoList } from './TodoList'; 
import { TodoCreateBtn } from './TodoCreateBtn';
import { TodoItem } from './TodoItem';
import { TodoClick} from './TodoClick';
import React from 'react';
import './index.css';

const itemsTodo = [
  {text: 'Todo A', completed: false},
  {text: 'Todo B', completed: false},
  {text: 'Todo C', completed: false},
  {text: 'Todo D', completed: false},
  {text: 'Todo E', completed: false},
];



function App() {

  //estado todos
  //estado de lista de tods
  const [todoList,settodoList] = React.useState(itemsTodo);

  //estado disparador al buscar un todo
  const [txtBuscar, settxtBuscar] = React.useState('');

  //estado disparador todo completado
  const [todos, settodos] = React.useState  (itemsTodo);

  //estados derivados
  const completedTodos = todoList.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todoList.length;

  const searchedTodo  = todoList.filter(
    (todo) => {
      return todo.text.toUpperCase().includes(txtBuscar.toUpperCase())
    }
  );

  const completeTodo = (text) => {
    //creamos una copia de los todos
    //ecma, javascript
    const newTodos = [...todos];
    let indexTodos = 0;

    indexTodos = newTodos.findIndex(
      (todo) => todo.text === text
    );
 

    if( newTodos[indexTodos].completed){
      newTodos[indexTodos].completed = false;
    }else{

        newTodos[indexTodos].completed = true;
   }
    settodoList(newTodos);
  }

 const unCompleteTodo = (text) => {

  let newTodos = [...todoList];
  newTodos = newTodos.filter(todo => todo.text !== text);

  settodoList(newTodos);
 }



  return (

    <React.Fragment>

      <TodoClick></TodoClick>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch txtBuscar={txtBuscar}
                   settxtBuscar={settxtBuscar}/>

      <TodoList> 
         {searchedTodo.map(todo => (
            <TodoItem
              key={todo.text}  text={todo.text}  
              completed={todo.completed}
              onComplete = {() => completeTodo(todo.text)} onUnComplete = {() => unCompleteTodo(todo.text)} />
         ))}
      </TodoList>

    <TodoCreateBtn />
    {/* coments   */}
    </React.Fragment>
  );
}








export default App;
