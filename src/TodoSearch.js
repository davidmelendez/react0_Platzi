import React from 'react';

function TodoSearch({txtBuscar,settxtBuscar}){

  
    return(
      <input placeholder="Buscar..." className="TodoSearch" value={txtBuscar} onChange={(event) => {
          console.log('TodoSearch');
         
          settxtBuscar(event.target.value);

          console.log(txtBuscar);
      }}></input>
    );
  }


export {TodoSearch}