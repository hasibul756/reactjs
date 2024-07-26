
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({id, data, onHandleDeleteTodo}) => {

  return (
    <li key={id} className="todo-item">
        <span>{data}</span>
        <div>
            <button className="todo-check-btn">
            <FaRegCheckCircle/>
            </button>
            <button className="todo-delete-btn" onClick={() => onHandleDeleteTodo(data)}>
            <MdDeleteForever/>
            </button>
        </div>
    </li>
  )
}

export default TodoList