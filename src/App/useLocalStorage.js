import React from "react";

function useLocalStorage(itemName, initialValue){

    const itemsInStorage = localStorage.getItem(itemName);
    let storageParse;
  
    if (!itemsInStorage) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      storageParse = initialValue;
    } else {
      //variable storage
      storageParse = JSON.parse(localStorage.getItem(itemName));
    }
  
    const [item, setItem] = React.useState(storageParse);
    
    const saveItems = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems))
      setItem(newItems);
    }
  
    return [item, saveItems];
  }

  export {useLocalStorage};