import { useState } from "react";

function InnerMock(){
  let [currQuestion , setCurrQuestion] = useState();
  let [question , setQuestion] = useState([]);
  let [score , setScore] = useState(0);
  return (
    <div>
      <h1>Mock Hai</h1>
      {console.log("Inner Mock Me")}
    </div>
  )
}

export default InnerMock;