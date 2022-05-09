import clsx from "clsx";
import React, { useState } from "react";
import './visibilityToggle.sass';

function VisibilityToggle(props) {

    const [isVisible, setVisibility] = useState(props.isVisible || false);

    function handleToggle(e) {
        if (props.onToggle)
            props.onToggle(!isVisible);
        setVisibility(!isVisible);
    }

    return(
        <div className='flex-container'>
            <button 
                type='button'
                className='toggle-visibility' 
                onClick={ handleToggle } 
            >
                <div className={ clsx('toggle-icon', isVisible ? 'icon-visible' : 'icon-hidden') }></div>
            </button>
        </div>
    );
}

export default VisibilityToggle;