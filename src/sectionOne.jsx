import React from 'react'
import './sectionOne.css'

export const SectionOne = () => {
    return (
        <>
            <section id='sectionOne' className='sectionOne'>
                <article id='sectionOneArticle' className='sectionOneArticle'>
                    <div className='divArticleOne'>
                        <h1>Franco</h1>
                        <h2>Spiazzi</h2>
                    </div>
                    <p>Full-Stack Web Developer</p>
                </article>
                <img src="../public/images/backgrounds.svg" alt="Arboles de fondo" />
            </section>
        </>
    )
}