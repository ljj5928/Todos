import React, { useEffect, useMemo, useState } from "react";
import InputTodo from "./Components/InputTodo";
import TodoList from "./Components/TodoList";
import Todotext from "./Components/Todotext";
import "./Todo.css";
import Filter from "./Components/Filter";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("total");
  const [maxLength,setMaxLength] =useState(34)

  //목록 추가
  const addList = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      return alert("할 일을 입력해주세요");
    }

    const newTodo = [
      ...todos,
      { id: Date.now(), text: inputText, completed: false },
    ];
    setTodos(newTodo);
    setInputText("");
  };

  //수정
  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const finishEdit = (e, id) => {
    e.preventDefault();

    if (editText.trim() === "") {
      return alert("목록을 빈칸으로 수정할 수 없습니다.");
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo,
      ),
    );

    setEditId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  //제거
  const deleteList = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAll = () => {
    setTodos([]);
  };

  //체크박스
  const toggleCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const checkFalse = todos.some((todo) => todo.completed === false);

  const completeAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
    if (!checkFalse) {
      return setTodos(todos.map((todo) => ({ ...todo, completed: false })));
    }
  };

  //화면에 나타날리스트
  const filteredList = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "uncompleted") return !todo.completed;
    return true;
  });

  //useMemo
  const totalListCount = useMemo(() => {
    return todos.length;
  }, [todos]);

  const completedListCount = useMemo(() => {
    return todos.filter((todo) => todo.completed).length;
  }, [todos]);

  const uncompletedListCount = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  //useEffect
  useEffect(()=>{
    const resizeView = ()=>{
      if(window.innerWidth <= 580){
        setMaxLength(15)
      } else 
        setMaxLength(34)
    }
    resizeView()

    window.addEventListener('resize',resizeView)
    return ()=> window.removeEventListener('resize',resizeView)
  },[])

  return (
    <div className="todo">
      <h1>✍️할 일 관리</h1>
      <Todotext
        totalListCount={totalListCount}
        uncompletedListCount={uncompletedListCount}
        completedListCount={completedListCount}
      />
      <InputTodo
        addList={addList}
        inputText={inputText}
        setInputText={setInputText}
        maxLength={maxLength}
      />
      <Filter
        filter={filter}
        setFilter={setFilter}
        completeAll={completeAll}
        deleteAll={deleteAll}
        checkFalse={checkFalse}
      />
      <TodoList
        filteredList={filteredList}
        finishEdit={finishEdit}
        editText={editText}
        setEditText={setEditText}
        cancelEdit={cancelEdit}
        toggleCheck={toggleCheck}
        startEdit={startEdit}
        deleteList={deleteList}
        editId={editId}
        todos={todos}
        filter={filter}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Todo;
