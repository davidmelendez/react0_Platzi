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
  const [todoList,settodoList] = React.useState(itemsTodo);
  const [txtBuscar, settxtBuscar] = React.useState('');


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
  return (

    <React.Fragment>

      <TodoClick></TodoClick>
      <TodoCounter completed={5} total={20} />
      <TodoSearch txtBuscar={txtBuscar}
                   settxtBuscar={settxtBuscar}/>

      <TodoList> 
         {searchedTodo.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
         ))}
      </TodoList>

    <TodoCreateBtn />
    {/* coments   */}
    </React.Fragment>
  );
}








export default App;
