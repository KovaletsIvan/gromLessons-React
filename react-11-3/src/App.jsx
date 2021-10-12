import React from "react";
import Expand from "./Expand";



const App = () => {
  const text =
    <p>
      Hooks are a new addition in React 16.8. They let you use state and other React features
      without writing a class.
    </p>
  return (
    <div className="app">
      <Expand title="Some title">
        {text}
      </Expand>
    </div>
  )
}


export default App
