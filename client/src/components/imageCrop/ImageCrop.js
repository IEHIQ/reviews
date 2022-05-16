import { useState } from 'react';
import { ReactCrop, Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function ImageCrop({src}) {
    // пример из документации не работает по каким-то причинам
    // const [crop, setCrop] = useState<Crop>();

    // return (
    //   <ReactCrop crop={crop} onChange={c => setCrop(c)}>
    //     <img src={src} />
    //   </ReactCrop>
    // )
}

export default ImageCrop;
