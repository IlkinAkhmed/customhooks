import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Usetoggle from "./CustomHook/index";
import useToggle from "./CustomHook/index";
import useLocal from "./LocalHook";

function App() {
  // const [toggle,handleToggle] = useToggle()
  // const [toggle1,handleToggle1] = useToggle()
  // const [toggle2,handleToggle2] = useToggle()

  // function increase1() {
  //   setCount(count=>count+1)
  // }
  // function decrease1() {
  //   setCount(count=>count-1)
  // }
  // function increase2() {
  //   setCount2(count=>count+1)
  // }
  // function decrease2() {
  //   setCount2(count=>count+1)
  // }

  // const [count, increaseCount,decreaseCount] = Usetoggle()
  // const [count2, increaseCount2,decreaseCount2] = Usetoggle()




  const [data, addTodo] = useLocal([]);

  console.log(data);
  return (
    <>
      <button onClick={() => addTodo("salam")}>+</button>
      {data && data.map((x) => <li>{x}</li>)}





      

      {/* <button onClick={increaseCount}> + </button>
    <p>{count}</p>
    <button onClick={decreaseCount}> - </button><br />


    <button onClick={increaseCount2}> + </button>
    <p>{count2}</p>
    <button onClick={decreaseCount2}> - </button> */}
      {/* <button onClick={()=>handleToggle()}>close</button>
    <nav>
      <ul className={`${toggle ? 'active' : "ul-one"}`}>
        <li>react1</li>
        <li>react2</li>
        <li>react3</li>
        <li>react4</li>
      </ul>
    </nav>

    <button onClick={()=>handleToggle1(!toggle1)}>close</button>
    <div>
      <ul className={`${toggle1 ? 'active' : "ul-one"}`}>
        <li>react1</li>
        <li>react2</li>
        <li>react3</li>
        <li>react4</li>
      </ul>
    </div>


    <button onClick={()=>handleToggle2(!toggle2)}>close</button>
    <div>
      <ul className={`${toggle2 ? 'active' : "ul-one"}`}>
        <li>react1</li>
        <li>react2</li>
        <li>react3</li>
        <li>react4</li>
      </ul>
    </div> */}
    </>
  );
}

export default App;
