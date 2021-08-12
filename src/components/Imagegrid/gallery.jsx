import React from 'react';
import './gallery.css';



const Gallery = ({id}) => {
    return (

        <div className="container" id = {id}>
            <h1 className="gallery_header pb-3">Our Prewedding Pictures</h1>
        <div className="gallery">
            <figure className="gallery__item gallery__item--1">
                <img src="Image grid/img1.JPG" alt="prewedding" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--2">
                <img src="Image grid/img2.JPG" alt="prewedding" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--3">
                <img src="Image grid/img3.JPG" alt="prewedding" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--4">
                <img src="Image grid/img4.JPG" alt="prewedding" className="gallery__img"/>
            </figure>
            
        </div>
    </div>
        
    )
}

export default Gallery;
