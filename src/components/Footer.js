import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const handleDelete = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(newTodos);
    setCheckAll(false);
  };
  return (
    <>
      {todos.length === 0 ? (
        <h2 style={{ textAlign: "center", color: "crimson" }}>
          ยินดีด้วย คุณทำทุกอย่างเสร็จแล้ว
        </h2>
      ) : (
        <div className="row">
          <label>
            <input
              type="checkbox"
              name="selectAll"
              id="selectAll"
              onChange={handleCheckAll}
              checked={checkAll}
            />
            เลือกทั้งหมด
          </label>
          <p>คุณมี {todos.filter(todo => todo.complete === false).length} อย่างที่ต้องทำ</p>
          <button id="delete" onClick={handleDelete}>
            ลบ
          </button>
        </div>
      )}
    </>
  );
}
