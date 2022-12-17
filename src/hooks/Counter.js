
import React from "react";
import { useState,useEffect } from "react";

export const Counter = () => {
    const[absolute , setAbsolute] = useState(0);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setAbsolute(() => absolute + 1);
    }, [count]); // <- add the count variable here
  
    return (
      <>
<br/>
<br/>

        <p>Count: {count}</p>
        <p>Number of times you have clicked the button: {absolute}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
<br/>
<br/>
<br/>
<br/>
      </>
    );
};