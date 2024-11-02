import React  from "react";



function TodoClick(){

    let [txtContador, settxtContador] = React.useState(0);


    return(
        <React.Fragment>
            <p>
                Diste click <span id="spanContador">{txtContador}</span> veces
            </p>
            <button onClick={() =>{
                   
                    settxtContador(++txtContador);
            }}>click</button>
        </React.Fragment>

    );
}

export {TodoClick}