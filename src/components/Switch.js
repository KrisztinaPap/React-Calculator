import React, { useState } from 'react';
import Calculator from './Calculator';
import '../calculator.css';

export default function Switch() {

    const [ oneInput, setOneInput ] = useState("");

    return (
        <>
            <label className="switch">
            <input id="checkbox" type="checkbox" onChange={ event => { setOneInput( !oneInput ) } } value={ oneInput }/>
            <span className="slider round"></span>
            </label>
            <Calculator value={oneInput} />
        </>
    );
}