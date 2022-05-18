import React from 'react';
import { Route, Navigate, useLocation } from "react-router-dom";

function ProtectedElement(props) {
    const { shouldRedirect, element, redirectPath } = props;
    const location = useLocation();

    return (
        shouldRedirect === true 
            ? <Navigate replace to={ redirectPath || '/' } state={ { from : location } } />
            : element

    )
}

export default ProtectedElement;