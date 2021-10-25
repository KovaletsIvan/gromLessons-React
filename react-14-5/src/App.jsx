import React, { useState } from 'react';
import Clock from './Clock';


const App = () => {
  const [visible, setVisible] = useState(true)

  if (!visible) {
    return <button onClick={() => setVisible(!visible)}>Show</button>
  }
  return (
    <>
      <Clock location='New York' offset={-5} />
      <Clock location='Kyiv' offset={2} />
      <Clock location='London' offset={0} />
      <button onClick={() => setVisible(!visible)}>Hide</button>
    </>

  )
};

export default App;
