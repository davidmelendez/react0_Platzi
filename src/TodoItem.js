import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'
import './TodoItem.css'

function TodoItem(props){
    return (
      <li className="TodoItem">
        <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
        />
       {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}>
          V
        </span>*/}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
        
        <DeleteIcon
        onDelete={props.onUnComplete}
        />
        {/*<span className="Icon Icon-delete" onClick={props.onUnComplete}>
          X
        </span>*/}
        </li>
    );
  }

  export {TodoItem}