function TodoSearch(){
    return(
      <input placeholder="Buscar..." className="TodoSearch" onChange={(event) => {
          console.log('TodoSearch');
          console.log(event);
          console.log(event.target);
          console.log(event.target.value);
      }}></input>
    );
  }


export {TodoSearch}