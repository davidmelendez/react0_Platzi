import React  from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext({});

function TodoProvider({children}){
    //estado todos
  //estado de lista de todos
  //podemos usar alias para no cambiar el nombre de propiedades usando los :
  const {item: todoList,
    saveItems: saveTodos,
    loading,
    error
   } = useLocalStorage("TODOS",[]);

//estado disparador al buscar un todo
const [txtBuscar, settxtBuscar] = React.useState("");

//TODO:Revisar el uso de esto
//estado disparador todo completado
//const [todos, settodos] =useLocalStorage("TODOS",[]);

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

if(newTodos !== undefined)
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
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            txtBuscar,
            settxtBuscar,
            searchedTodo,
            completeTodo,
            unCompleteTodo

        }}>
               {children} 
        </TodoContext.Provider>
    );
}


export {TodoContext, TodoProvider};