import React from 'react';
import Place from '../place/Place';
import './placeList.sass'

function PlaceList(props) {
    const places = props.places;
    return (
        <div className='flex-container flex-column flex-center places'>
            {
                places &&
                places.map((item, index) => (
                    <Place data={item} key={item.id}/>
                ))
            }
        </div>
    );
}

export default PlaceList;