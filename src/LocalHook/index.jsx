import React, { useEffect, useState } from "react";

const useLocal = () => {
  const [data, setData] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(data));
  }, [data]);



  function addTodo(word) {
    setData([...data, word]);
  }

  return [data, addTodo];
};

export default useLocal;
