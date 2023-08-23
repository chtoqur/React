import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Header from './pages/Header';
// import Nav from './pages/Nav';

// import DescWeb from './pages/DescWeb';
// import DescHtml from './pages/DescHtml';
// import DescCss from './pages/DescCss';
// import DescJs from './pages/DescJs';

// Router Test
// function App() {

//   return (
//     <div className="App">
//       <Header />
//       <Nav />
//       <input type="password"></input>

//       <Routes>
//         <Route path="/" element={<DescWeb/>} />
//         <Route path="/html" element={<DescHtml/>} />
//         <Route path="/css" element={<DescCss/>} />
//         <Route path="/js" element={<DescJs/>} />
//       </Routes>
//     </div>
//   );
// }

// State Test
// function App() {

//   // weight : 변수
//   // setWeight : 함수
//   let [weight, setWeight] = useState(45);

//   return (
//     <div className="App">
//       <span>당신의 몸무게 : {weight}Kg</span>
//       <button onClick={()=>{
//         setWeight(weight + 1);
//       }}>몸무게 1 증가</button>
//     </div>
//   );
// }

function App() {

  // 컴포넌트를 다시 그리는 방법 ==> useState

  let [newVisitor, setNewVisitor] = useState('');   // input 부분
  let [visitors, setVisitors] = useState([]);       // 명단추가 부분

  const insertVisitorProc = ()=>{
    // visitors를 갱신한다.
    setVisitors([newVisitor, ...visitors]);

    setNewVisitor('');
  }

  return (
    <div className="App">
      {/* 진짜 DOM이 아님 (가상 DOM) */}                                 {/* target : 이벤트가 발생한 DOM 객체 */}
      <input type="text" value={newVisitor} onChange={(e)=>{ setNewVisitor(e.target.value); }} />
      <button type="button" onClick={insertVisitorProc}>명단추가</button>
      <hr />

      {
        visitors.map((value, index)=>{
          return (<h3 key={index}> {value} </h3>);
        })
      }

    </div>
  );
}

export default App;
