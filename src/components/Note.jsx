// Componente Nota.jsx
import React from 'react';
import './Note.css'

const Note = ({image, titulo, descripcion, referenceUrl }) => {
    return (
            <acticle className="articleNote" id="articleNote">
                <h2 className="tittleNote">{titulo}</h2>
                {/* <p className="descriptionNote">{descripcion}</p> */}
                <a target='blank' href={referenceUrl}><img className='imgNote' src={image} alt={descripcion} /></a>
            </acticle>
    );
};

export default Note;
