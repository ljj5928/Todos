import React from "react";

const TodoList = ({
  filteredList,
  finishEdit,
  editText,
  setEditText,
  cancelEdit,
  toggleCheck,
  startEdit,
  deleteList,
  editId,
  todos,
  filter,
  maxLength
}) => {
  return (
    <>
      <ul className="todo_list">
          {todos.length === 0 && <li className="empty_item"><p>📝새 할 일을 추가해보세요!</p></li>}
          {todos.length !== 0 &&
            filter === "uncompleted" &&
            filteredList.length === 0 && <li className="empty_item"><p>🎉 모든 할 일을 완료했어요!</p></li>}
          {todos.length !== 0 &&
            filter === "completed" &&
            filteredList.length === 0 && <li className="empty_item"><p>🕒아직 완료한 일이 없어요</p></li>}
        {filteredList.map((todo) =>
          editId === todo.id ? (
            <li className="edit_item" key={todo.id}>
              <form onSubmit={(e) => finishEdit(e, todo.id)}>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") return cancelEdit();
                  }}
                  maxLength={maxLength}
                  autoFocus
                />
                <button type="submit">✅</button>
                <button type="button" onClick={() => cancelEdit()}>
                  ❌
                </button>
              </form>
            </li>
          ) : (
            <li className="todo_item" key={todo.id}>
              <div className="item_content">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCheck(todo.id)}
                />
                <span className={`item_text ${todo.completed ? "active" : ""}`}>
                  {todo.text}
                </span>
              </div>
              <div className="item_btn">
                <button
                  type="button"
                  onClick={() => startEdit(todo.id, todo.text)}
                  disabled={todo.completed}
                >
                  ✏️
                </button>
                <button type="button" onClick={() => deleteList(todo.id)}>
                  🗑️
                </button>
              </div>
            </li>
          ),
        )}
      </ul>
    </>
  );
};

export default TodoList;
