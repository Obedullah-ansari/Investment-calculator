// import { useState } from "react";
export default function Input({userinput, handelchange}) {
  // const [input, setinput] = useState({
  //   initialInvestment: 10000,
  //   annualInvestment: 50000,
  //   expectedReturn: 6,
  //   duration: 10,
  // });
  // function handlechangeinput(inputIdentifier, newvalue) {
  //   setinput((prev)=>{
  //       return{
  //           ...prev,
  //           [inputIdentifier] : newvalue,
  //       }
  //   });
  // }

  // ...............................................left the state .......................................................
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input type="number" required  value={userinput.initialInvestment} onChange={(event)=> handelchange('initialInvestment',event.target.value)}/>
        </p>

        <p>
          <label htmlFor="AnnualInvestment">Annual Investment</label>
          <input type="number" required value={userinput.annualInvestment} onChange={(event)=> handelchange('annualInvestment',event.target.value)} />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input type="number" required  value={userinput.expectedReturn} onChange={(event)=> handelchange('expectedReturn',event.target.value)}/>
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" required  value={userinput.duration} onChange={(event)=> handelchange('duration',event.target.value)}/>
        </p>
      </div>
    </div>
  );
}
