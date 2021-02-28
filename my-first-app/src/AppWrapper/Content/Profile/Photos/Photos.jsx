import PhotosStyle from './Photos.module.css'
import React from 'react';

const Photos = (props) => {
    let images = []
    let id = 0
    for (let image of props.photos.images) {
        id++
        images.push(<div key={id.toString()} className={PhotosStyle.photo}><img alt='' src={image}/></div>)
    }
    return (
        <div className={`${PhotosStyle.photos} ${PhotosStyle.div}`}>
            <span>Мои Фотографии</span>
            <div className={PhotosStyle.photosBar}>
               {images}
            </div>
        </div>
    )
}

export default Photos;