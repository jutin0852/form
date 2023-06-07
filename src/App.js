import MyInputs from "./Input/myInputs";
import { useState } from "react";

function App() {
  const [done, setIsDone] = useState(false);
  console.log(`isdone ${done} `);
  if (done) {
    return <h1>thank you</h1>;
  }
  return (
    <div>
      <MyInputs setIsDone={setIsDone} />
    </div>
  );
}

export default App;
