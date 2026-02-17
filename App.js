import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // 🔹 Runs once (Component Did Mount)
  useEffect(() => {
    console.log("Component Mounted");

    // 🔹 Cleanup (Component Will Unmount)
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // 🔹 Runs whenever count changes (Component Did Update)
  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Lifecycle Example</h1>

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <br /><br />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      {show && <Child />}
    </div>
  );
}

function Child() {
  useEffect(() => {
    console.log("Child Mounted");

    return () => {
      console.log("Child Unmounted");
    };
  }, []);

  return <h3>Child Component</h3>;
}

export default App;
