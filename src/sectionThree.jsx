import React from 'react'
import './SectionThree.css'
import Note from './components/Note'

const SectionThree = () => {
    return (
        <>
            <section className='setionThree' id='sectionThree'>
                <div className='sectionThreeNotes'>
                    <h2 className='TittleSectionThree'>Community Manager</h2>
                    <div className="notes">
                        <Note
                            color=""
                            image="./images/Sketches/InstitutoCFLBsAs/InstitutoCFLBsAs.png"
                            titulo=""
                            descripcion="Esta es una descripción breve pero útil sobre la nota."
                            referenceUrl='https://www.instagram.com/cursos.presenciales?igsh=ejlsNW03Z2F0cmU='
                        />
                        <Note
                            color=""
                            image="./images/Sketches/InstitutoCFLBsAs/cursosTécnicos.png"
                            titulo=""
                            descripcion="Esta es una descripción breve pero útil sobre la nota."
                            referenceUrl='https://www.facebook.com/@cursostecnicosyoficiosrentables/'
                        />
                        <Note
                            color=""
                            image="./images/Sketches/InstitutoCFLBsAs/cflMoreno.jpg"
                            titulo=""
                            descripcion="Esta es una descripción breve pero útil sobre la nota."
                            referenceUrl='https://www.facebook.com/profile.php?id=100054608731915'
                        />
                    </div>
                </div>
                <img src="/images/backgroundSectionTwo.svg" alt="background mountain" />
            </section>
        </>
    )
}

export default SectionThree