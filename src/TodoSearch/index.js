import React from 'react';


  import {TodoContext} from '../Context';
  function TodoSearch(){
  
    const {
      searchedTodo,
      settxtBuscar,
      txtBuscar
    } = React.useContext(TodoContext)    
    
  
    return(
      <input placeholder="Buscar..." className="TodoSearch" value={txtBuscar} onChange={(event) => {
          console.log('TodoSearch');
         
          settxtBuscar(event.target.value);

          console.log(txtBuscar);
      }}></input>
    );
  }


export {TodoSearch}