import React, { useState } from 'react';
import '../calculator.css';


function CalculatorManyInputs () 
{
    const [ input1, setInput1 ] = useState(0);
    const [ operator, setOperator ] = useState( '+' );
    const [ input2, setInput2 ] = useState(0);
    const [ result, setResult ] = useState(0);


    const calculateResult = ( event ) => {
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
    }

    const resetCalculator = () => {
        setInput1(0);
        setInput2(0);
        setResult(0);
        setOperator('+');
    }

    return (
        <form onSubmit={ calculateResult }>
            <p id="operation">{input1} {operator} {input2} = </p>
            <p id="result">{ result }</p>
            <label>Input 1:</label>
                <input
                    type="number" 
                    name="input1" 
                    onChange={ event => { setInput1( event.target.value ) } }
                    value={ input1 }
                    />
            <label>Operation:</label>
                <select onChange={ event => { setOperator( event.target.value ) } } value={ operator }>            
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            <label>Input 2:</label>
                <input 
                    type="number" 
                    name="input2" 
                    onChange={ event => { setInput2( event.target.value ) } }
                    value={ input2 }
                />
            <input id="calculateButton" type="submit" value="Calculate" /> 
            <input id="resetButton" type="submit" value="Reset Calculator" onClick={ resetCalculator } /> 
        </form>
    )
}

export default CalculatorManyInputs;