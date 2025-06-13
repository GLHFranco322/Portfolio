import React, { useState } from 'react';
import './SectionOne.css';

const SectionOne = () => {
    const [showByMe, setShowByMe] = useState(false);

    // const toggleByMe = () => {
    //     setShowByMe(prev => !prev);
    // };

    return (
        <>
            <section id='sectionOne' className='sectionOne'>
                <article id='sectionOneArticle' className='sectionOneArticle'>
                    <div className='divArticleOne'>
                        <h1>Franco</h1>
                        <h2>Spiazzi</h2>
                        <p>Full-Stack Web Developer</p>
                        <button
                            id="byMeButton"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/FrancoSpiazziResume.pdf';
                                link.download = 'FrancoSpiazziResume.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            <h4>Descargar CV</h4>
                        </button>
                        {/* <article className={`byMeText ${showByMe ? 'visible' : 'hidden'}`} id="byMeText">
                            <h5>Franco Dario Spiazzi</h5>
                            <p>
                                Soy Web Designer orientado al frontend,
                                un apasionado de la creatividad digital que ha pasado la
                                mayor parte de su vida frente a un monitor, con música a
                                todo volumen y una curiosidad insaciable por aprender de todo,
                                todo el tiempo. Fui DJ y <a target='blank' href="https://www.youtube.com/watch?v=mxAjxbif5Uk">YouTuber</a>,
                                y siempre he estado rodeado de arte, diseño y tecnología.
                                Gran parte de mi tiempo lo dedico a dibujar, explorar nuevas
                                herramientas visuales y perfeccionar mis habilidades en el
                                mundo digital.
                                Pueden encontrarme en <a target='black' href="">GitHub</a>, <a target='black' href="">LinkedIn</a> o escribirme directamente a mi <a target='black' href="">Whatsapp</a> personal.
                            </p>
                        </article> */}
                    </div>
                </article>
                <img src="/images/backgrounds.svg" alt="Arboles de fondo" />
            </section>
        </>
    );
};

export default SectionOne;
