import React, { useState } from 'react';
import '../calculator.css';

function Calculator () 
{

    const [ input1, setInput1 ] = useState(0);
    const [ operation, setOperation ] = useState( '+' );
    const [ input2, setInput2 ] = useState(0);

    return (
        <form>
            <label>Input 1:</label>
                <input 
                    type="number" 
                    name="input1" 
                    onChange={ event => { setInput1( event.target.value ) } }
                    />
            <label>Operation:
                <select onChange={ event => { setOperation( event.target.value ) } }>            
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
                />
            <input id="calculateButton" type="submit" value="Calculate" /> 
        </form>
    )
}

export default Calculator;