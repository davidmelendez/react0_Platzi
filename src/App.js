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
  {text: 'Todo A', completed: true},
  {text: 'Todo B', completed: false},
  {text: 'Todo C', completed: false},
  {text: 'Todo D', completed: false},
  {text: 'Todo E', completed: false},
];
function App() {
  return (

    <React.Fragment>

      <TodoClick></TodoClick>
      <TodoCounter completed={5} total={20} />
      <TodoSearch />

      <TodoList> 
         {itemsTodo.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
         ))}
      </TodoList>

    <TodoCreateBtn />
    {/* coments   */}
    </React.Fragment>
  );
}








export default App;
