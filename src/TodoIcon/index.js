import React from "react";
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
    "check" : (color) => <CheckSVG className="Icon-svg" fill={color}></CheckSVG>,
    "delete" : (color) => <DeleteSVG className="Icon-svg" fill={color}></DeleteSVG>
}

function TodoIcon({type, color, onClickx}){
    return(
            <span className={`Icon-container Icon-container-${type}`} onClick={onClickx}>
                {iconTypes[type](color)}  
            </span>
    )

}

export { TodoIcon };