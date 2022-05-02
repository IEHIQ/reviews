import React from 'react';
import { useParams } from 'react-router-dom';

function Place(props) {
    let params = useParams();
    return (
        <div>
            Place {params.id}
        </div>
    );
}

export default Place;