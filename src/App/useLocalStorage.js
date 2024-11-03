import React from "react";

function useLocalStorage(itemName, initialValue){

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);  
  
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const itemsInStorage = localStorage.getItem(itemName);
          let storageParse;
        
      
          if (!itemsInStorage) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            storageParse = initialValue;
          } else {
            //variable storage
            storageParse = JSON.parse(localStorage.getItem(itemName));
            setItem(storageParse);
          }
    
          }catch(error){
            setError(true);
        }finally{
          setLoading(false);
        
        }
      }, 2000);
    }, []);

    
    
    const saveItems = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems))
      setItem(newItems);
    };
     //ya no se devuelve en array porque dependeriamos del orden exacto del retorno
    //return [item, saveItems, loading, error];

    //se envia como objeto y asi ya no importa como llamamos al hook
    return {
        item,
        saveItems, 
        loading,
        error
    };
  }

  export {useLocalStorage};