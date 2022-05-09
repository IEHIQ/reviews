import clsx from "clsx";
import React, { useState } from "react";
import './checkbox.sass'

function Checkbox(props) {

    const [status, setStatus] = useState(props.status || false);

    function handleToggle() {
        if (props.onToggle)
            props.onToggle(!status);
        setStatus(!status);
    }

    return(
        <div className="flex-container">
            <button 
                type='button' 
                className={ clsx('checkbox-button flex-fill', status && 'checked') } 
                onClick={ handleToggle } 
            >
                <p className='b'>{ props.text }</p>
            </button>
        </div>
    );
}

export default Checkbox;