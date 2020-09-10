import React from 'react';

function Form () 
{
    return (
        <form>
            <label>Input 1:<input type="number" name="input1" /></label>
            <label>Operation:
                <select>            
                    <option value="addition">+</option>
                    <option value="subtraction">-</option>
                    <option value="multiplication">*</option>
                    <option value="division">/</option>
                </select>
            </label>
            <label>Input 2:<input type="number" name="input2" /></label>
            <button id="calculateButton" type="submit" value="Submit">Calculate</button> 
        </form>
    )
}

export default Form;