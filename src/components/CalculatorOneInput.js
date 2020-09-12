import React, { useState } from 'react';
import '../calculator.css';


function CalculatorOneInput () 
{
    const [ userInput, setUserInput ] = useState("");

    const [ result, setResult ] = useState(0);


/*     const calculateResult = ( event ) => {
        event.preventDefault();
        
        switch(operator) {
            case '+':
                setResult( (Number(input1)+Number(input2)).toFixed(4) );
                break;
            case '-':
                setResult( (Number(input1)-Number(input2)).toFixed(4) );
                break;
            case '*':
                setResult( (Number(input1)*Number(input2)).toFixed(4) );
                break;            
            case '/':
                setResult( (Number(input1)/Number(input2)).toFixed(4) );
                break;
            default:
                break;
        }
    } */

    const resetCalculator = () => {
        setUserInput("");
        setResult(0);
    }

    return (
        <form > 
            <p id="result">{ result }</p>
            <label>Enter your equation:</label>
                <input
                    type="number" 
                    name="userInput" 
                    onChange={ event => { setUserInput( event.target.value ) } }
                    value={ userInput }
                    />
            <input id="calculateButton" type="submit" value="Calculate" /> 
            <input id="resetButton" type="submit" value="Reset Calculator" onClick={ resetCalculator } /> 
        </form>
    )
}

export default CalculatorOneInput;