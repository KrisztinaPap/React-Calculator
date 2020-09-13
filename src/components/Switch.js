import React, { useState } from 'react';
import Calculator from './Calculator';
import '../calculator.css';
import '../switch.css';

export default function Switch() {

    const [ oneInput, setOneInput ] = useState("");

    return (
        <>
            <div className="toggleBox">   
                <div>Fields</div>
                <div>
                    <label className="switch">
                    <input id="checkbox" type="checkbox" onChange={ event => { setOneInput( !oneInput ) } } value={ oneInput }/>
                    <span className="slider round"></span>
                    </label>
                </div>
                <div>One input</div>
            </div>
                <Calculator value={oneInput} />
        </>
    );
}