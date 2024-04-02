import Input from "./components/input.jsx";
import Result from "./components/result.jsx";
import { useState } from "react";
function App() {
  const [input, setinput] = useState({
    initialInvestment: 10000,
    annualInvestment: 50000,
    expectedReturn: 6,
    duration: 10,
  });
  function handlechangeinput(inputIdentifier, newvalue) {
    setinput((prev)=>{
        return{
            ...prev,
            [inputIdentifier] : +newvalue,
        }
    });
  }
  const inputisvalid= input.duration >=1
  return (
   <div>  
    <Input userinput={input} handelchange={handlechangeinput} />
    {!inputisvalid &&  <p  className="center"  >Please Givre Duration Of Your Investment</p> }  
      
    { inputisvalid && <Result userinput={input}/>}
   </div>
  )
}

export default App
