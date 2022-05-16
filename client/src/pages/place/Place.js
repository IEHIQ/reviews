import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './place.sass';

function Place(props) {
    const data = props.data;
    return (
        <Link to={`./${ props.data.id }`} className='flex-container flex-row place'>
            <img className='place-thumb' src={ data.img || '' }/>
            <div className='flex-container flex-column'>
                <div className='flex-container flex-row'>
                    <p className='place-title b m'>{ data.title }</p>
                    <p className='place-rating b m'>{ data.rating }/5</p>
                </div>
                <p className='place-desc s'>{ data.desc }</p>
            </div>
        </Link>
    );
}

export default Place;