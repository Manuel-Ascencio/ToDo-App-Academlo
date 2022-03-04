// Components
import TodoItem from "../todo-item/todo-item.component";

import classes from "./todo-list.styles.module.css";

const TodoList = ({ items, onEditTodo, onDeleteTodo }) => {
  return (
    <div className={classes.list}>
      {items.length > 0 &&
        items.map(({ id, content }) => (
          <TodoItem
            key={id}
            id={id}
            content={content}
            onEditHandler={onEditTodo}
            onDeleteHandler={onDeleteTodo}
          />
        ))}
      {items.length === 0 && (
        <p className={classes.message}>No pending To Do's</p>
      )}
    </div>
  );
};

export default TodoList;
