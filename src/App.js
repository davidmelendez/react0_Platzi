import logo from './platzi.webp';
import './App.css';
import { TodoSearch } from './TodoSearch';
import { TodoCounter } from './TodoCounter'
import { TodoList } from './TodoList'; 
import { TodoCreateBtn } from './TodoCreateBtn';
import { TodoItem } from './TodoItem';
function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

    <TodoCreateBtn />
    </div>
  );
}








export default App;
