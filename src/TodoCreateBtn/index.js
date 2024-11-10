import React from 'react';
import { TodoContext } from '../Context';
import './todoCreateBtn.css';





function TodoCreateBtn(){
  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);   
    return(
     
      <button  className="CreateTodoButton"
      onClick={() => {
        if (openModal) {
            setOpenModal(false);
        }else{
          setOpenModal(true);
        }
      }}>+</button>

      
    );

  }
  

  export {TodoCreateBtn}