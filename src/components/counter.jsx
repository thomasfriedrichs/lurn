const { useState, Fragment, useEffect } = require("react");

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `${name} has clicked ${count} times!`
  });

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