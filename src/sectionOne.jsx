import React from 'react'
import './sectionOne.css'

const SectionOne = () => {
    return (
        <>
            <section id='sectionOne' className='sectionOne'>
                <article id='sectionOneArticle' className='sectionOneArticle'>
                    <div className='divArticleOne'>
                        <h1>Franco</h1>
                        <h2>Spiazzi</h2>
                        <p>Full-Stack Web Developer</p>
                        <button>
                            <h4>
                                Sobre mi
                            </h4>
                        </button>
                    </div>
                </article>
                <img src="/images/backgrounds.svg" alt="Arboles de fondo" />
            </section>
        </>
    )
}

export default SectionOne