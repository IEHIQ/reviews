import React, { useState } from "react";
import './input.sass';
import VisibilityToggle from "./visibilityToggle/VisibilityToggle";
import clsx from 'clsx';
import TextInput from "./TextInput";

function HiddenInput(props) {
    const [isVisible, setVisibility] = useState(props.isVisible || false);

    return(
        <div className="flex-container flex-row">
            <TextInput 
                onChange={ props.onChange }
                handleValidity={ props.handleValidity }
                type={ clsx(isVisible ? 'text' : 'password') }
                placeholder={ props.placeholder }
                regex={ props.regex }
                required={ props.required }
                value={ props.value }
            />
            <VisibilityToggle 
                onToggle={ () => { setVisibility(!isVisible); } }  
                isVisible={ isVisible }
            />
        </div>
    );
}

export default HiddenInput;