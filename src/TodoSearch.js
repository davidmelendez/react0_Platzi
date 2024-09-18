import React from 'react';

function TodoSearch(){

  const [txtBuscar, settxtBuscar] = React.useState('');

    return(
      <input placeholder="Buscar..." className="TodoSearch" value={txtBuscar} onChange={(event) => {
          console.log('TodoSearch');
         
          settxtBuscar(event.target.value);

          console.log(txtBuscar);
      }}></input>
    );
  }


export {TodoSearch}