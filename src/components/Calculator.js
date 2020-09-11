import React, { useState } from 'react';
import '../calculator.css';


function Calculator () 
{
    const [ input1, setInput1 ] = useState(0);
    const [ operator, setOperator ] = useState( '+' );
    const [ input2, setInput2 ] = useState(0);
    const [ result, setResult ] = useState( "" );


    const calculateResult = ( event ) => {
        event.preventDefault();
        setResult( Number(input1)+Number(input2) );
    }

    return (
        <form onSubmit={ calculateResult }>
            <label>Input 1:</label>
                <input 
                    type="number" 
                    name="input1" 
                    onChange={ event => { setInput1( event.target.value ) } }
                    value={ input1 }
                    />
            <label>Operation:
                <select onChange={ event => { setOperator( event.target.value ) } } value={ operator }>            
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </label>
            <label>Input 2:</label>
                <input 
                    type="number" 
                    name="input2" 
                    onChange={ event => { setInput2( event.target.value ) } }
                    value={ input2 }
                />
            <input id="calculateButton" type="submit" value="Calculate" /> 
            <p>{ result }</p>
        </form>
    )
}

export default Calculator;