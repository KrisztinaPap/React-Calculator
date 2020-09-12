import React from 'react';
import '../calculator.css';
import CalculatorManyInputs from './CalculatorManyInputs';
import CalculatorOneInput from './CalculatorOneInput';

export default function Calculator(props) {
    if (props.value) {
        return <CalculatorOneInput />;  }
    else {
        return <CalculatorManyInputs />;
    } 
}