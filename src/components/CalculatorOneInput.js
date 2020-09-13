import React, { useState } from 'react';
import '../calculator.css';


function CalculatorOneInput () 
{
    const [ userInput, setUserInput ] = useState("");
    const [ result, setResult ] = useState(0);
    const [ myNumbers, setNumberArray ] = useState([]); 
    const [ myOperators, setOperatorArray ] = useState([]);
    let newOperatorArray = [];

    const breakUpInput = ( event ) => {
        event.preventDefault();
        setNumberArray ( userInput.split( /[*+/-]/gi ));

        let operatorArray = userInput.split(/[0123456789]/);
        for (let i=0; i<operatorArray.length; i++) {
            if (operatorArray[i] !== "") {
                newOperatorArray.push(operatorArray[i]);
            }
        }       
        setOperatorArray( newOperatorArray );
    }

    // Function to look for multiplication

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
        <form onSubmit={ breakUpInput }> 
            <p id="result">{ result }</p>
            <p id="myNumbers">{ myNumbers }</p>
            <p id="myOperators">{ myOperators }</p>
            <label>Enter your equation:</label>
                <input
                    type="text" 
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