
import PropTypes from 'prop-types';
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({ data, checked, onHandleDeleteTodo, onHandleCheckedTodo }) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checked" : ""}>{data}</span>
      <div>
        <button className="todo-check-btn" onClick={() => onHandleCheckedTodo(data)}>
          <FaRegCheckCircle />
        </button>
        <button className="todo-delete-btn" onClick={() => onHandleDeleteTodo(data)}>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

TodoList.propTypes = {
  data: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onHandleDeleteTodo: PropTypes.func.isRequired,
  onHandleCheckedTodo: PropTypes.func.isRequired,
};

export default TodoList;
