import clsx from 'clsx';
import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/src/ReactCrop.scss';
import ImageCrop from '../imageCrop/ImageCrop';
import './imageInput.sass';

// function CropDemo({ src }) {
//     const [crop, setCrop] = useState<Crop>();
//     return (
//       <ReactCrop crop={crop} onChange={c => setCrop(c)}>
//         <img src={src} />
//       </ReactCrop>
//     )
//   }

function ImageInput(props) {
    const [imgSrc, setImgSrc] = useState(props.src || '');
    const [imgValidity, setImgValidity] = useState(true);

    const onDrop = useCallback(acceptedFiles => {
        try {
            const src = URL.createObjectURL(acceptedFiles[0]);
            setImgSrc(src);
            setImgValidity(true);
            if (props.onChange)
                props.onChange(src);
        } 
        catch (error) {
            setImgValidity(false);
            console.log(error);
        }
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({ 
        onDrop: onDrop, 
        accept: {
            'image/jpeg': [],
            'image/png': []
        },
        maxFiles: 1
    })

    return (
        <div className={ clsx('image-drop s b flex-container flex-center', !imgValidity && 'invalid') } {...getRootProps()}>
            <input {...getInputProps()} />
            { 
                isDragActive ?
                <p className='drop-prompt'>Можете отпускать</p> :
                <p className='drop-prompt'>Перетащите изображение сюда</p>

            }
            <img className='drop-image' src={ imgSrc } alt=''/>
            <ImageCrop src={ imgSrc }/>
        </div>
    )
}

export default ImageInput;