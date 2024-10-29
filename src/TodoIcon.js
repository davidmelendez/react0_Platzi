import React from "react";
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';


const iconTypes = {
    "check" : <CheckSVG></CheckSVG>,
    "delete" : <DeleteSVG></DeleteSVG>
}

function TodoIcon({type, color}){
    return(
            <span className={`Icon Icon-svg Icon-${type}`}>
                {iconTypes[type]}  
            </span>
    )

}

export { TodoIcon };