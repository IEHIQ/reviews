import react from "react";
import './output.sass';

function TextOutput(props) {
    return(
        <div className='text-output flex-container flex-row'>
            <p className='label'>{ props.label }</p>
            <p className='value'>{ props.value }</p>
        </div>
    );
}

export default TextOutput;