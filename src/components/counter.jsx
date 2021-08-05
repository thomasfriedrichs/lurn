import React, { useState, Fragment} from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";


function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useDocumentTitle(name);

  return (
    <Fragment>
      <input type="text" onChange={ e => setName(e.target.value)}/>
      <p>{name}: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </Fragment>
  )
}

export default Counter;