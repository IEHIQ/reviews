import React from 'react';
import { useParams } from 'react-router-dom';

function PlaceStats(props) {
    let params = useParams();
    return (
        <div>
            Cool Stats +{params.id}
        </div>
    );
}

export default PlaceStats;