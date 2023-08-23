import React, { useState } from "react";

function App() {

  const visi = ["최이서"];

  let [newVisitor, setNewVisitor] = useState('');
  let [visitors, setVisitors] = useState(visi);

  const insertVisitor = function()
  {
    visi.push(newVisitor);

    setVisitors([newVisitor, ...visitors]);
    setNewVisitor('');
  }

  const changeInputBox = function(e)
  {
    setNewVisitor(e.target.value);
  }

  return (
    <div className="App">
      <input type="text" value={newVisitor} onChange={changeInputBox} />
      <button type="button" onClick={insertVisitor}>명단추가</button>
      <hr/>

      {
        visitors.map((value, index) => {
          return (<h3 key={index}> {value} </h3>);
        })
      }
    </div>
  );
}

export default App;