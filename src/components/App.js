import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <br />
      how many times have you visited here?
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}