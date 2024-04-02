import {calculateInvestmentResults ,formatter} from  "../util/investment.js";

export default function Result({userinput}){
   const resultdata= calculateInvestmentResults(userinput);
   const initialInvestment=resultdata[0].valueEndOfYear-resultdata[0].interest -resultdata[0].annualInvestment
    return(
        <table id="result">
          <thead>
            <tr>
                <th>Year</th>
                <th> Investment Value  </th>
                <th>   Interst(year) </th>
                <th> total Interset </th>
                <th> Investment capital </th>
            </tr>
          </thead>
           <tbody>
            {resultdata.map((yeardata)=>{
                const totalInterset= yeardata.valueEndOfYear -yeardata.annualInvestment* yeardata.year -initialInvestment;
                const totalamount= yeardata.valueEndOfYear-totalInterset;
               return(
                <tr key={yeardata.year}>
                    <td> {yeardata.year} </td>
                    <td> {formatter.format(yeardata.valueEndOfYear)} </td>
                    <td> {formatter.format(yeardata.interest)} </td>
                    <td> {formatter.format(totalInterset)} </td>
                    <td> {formatter.format(totalamount)} </td>
                </tr>
               );
            })}
           </tbody>
        </table>
    );
}