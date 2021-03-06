import React, { useState } from 'react';
import '../calculator.css';


function CalculatorOneInput () 
{
    const [ userInput, setUserInput ] = useState("");
    const [ result, setResult ] = useState(0);
    let myNumbers = []; 
    let myOperators = [];
    let newOperatorArray = [];


    const breakUpInput = ( event ) => {
        event.preventDefault();
        myNumbers = userInput.split( /[*+/-]/gi );

        let operatorArray = userInput.split(/[0123456789]/);
        for (let i=0; i<operatorArray.length; i++) {
            if (operatorArray[i] !== "") {
                newOperatorArray.push(operatorArray[i]);
            }
        }       
        myOperators = newOperatorArray;

        doMultiplication();
        doDivision();
        doAddition();
        doSubtraction();
        giveFinalResult();
    }

    // Function to look for multiplication
        // Loop through operators while one exists
        // When operator is *, multiply appropriate two items in the myNumbers array AND replace them with result AND remove operator

    const doMultiplication = ( ) => {

        while (myOperators.includes("*")) {
            for (let i=0; i<myOperators.length; i++) {
            
                if ( myOperators[i] === "*" ) {
                    let tempResult = (myNumbers[i] * myNumbers[i+1]);
                    myOperators.splice(i, 1);
                    myNumbers.splice(i, 2, tempResult);
                } 
            }
        }
    }

    const doDivision = ( ) => {

        while (myOperators.includes("/")) {
            for (let i=0; i<myOperators.length; i++) {
            
                if ( myOperators[i] === "/" ) {
                    let tempResult = (myNumbers[i] / myNumbers[i+1]);
                    myOperators.splice(i, 1);
                    myNumbers.splice(i, 2, tempResult);
                } 
            }
        }
    }

    const doAddition = ( ) => {

        while (myOperators.includes("+")) {
            for (let i=0; i<myOperators.length; i++) {
            
                if ( myOperators[i] === "+" ) {
                    let tempResult = (Number(myNumbers[i]) + Number(myNumbers[i+1]));
                    myOperators.splice(i, 1);
                    myNumbers.splice(i, 2, tempResult);
                } 
            }
        }
    }

    const doSubtraction = ( ) => {

        while (myOperators.includes("-")) {
            for (let i=0; i<myOperators.length; i++) {
            
                if ( myOperators[i] === "-" ) {
                    let tempResult = (Number(myNumbers[i]) - Number(myNumbers[i+1]));
                    myOperators.splice(i, 1);
                    myNumbers.splice(i, 2, tempResult);
                } 
            }
        }
    }

    const giveFinalResult = () => {
        setResult( myNumbers );
    }

    const resetCalculator = () => {
        setUserInput("");
        setResult(0);
    }

    return (
        <form onSubmit={ breakUpInput }> 
            <p id="result">{ result }</p>

            <label>Enter your equation:</label>
                <input
                    type="text" 
                    name="userInput" 
                    onChange={ event => { setUserInput( event.target.value ) } }
                    value={ userInput }
                    />
                <p>* Calculator cannot handle brackets at this time</p>
            <input id="calculateButton" type="submit" value="Calculate" /> 
            <input id="resetButton" type="submit" value="Reset Calculator" onClick={ resetCalculator } /> 
        </form>
    )
}

export default CalculatorOneInput;