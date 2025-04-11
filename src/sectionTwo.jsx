import React from 'react'
import './SectionTwo.css'

const SectionTwo = () => {
  return (
    <>
      <section className='sectionTwo' id='sectionTwo'>
        <h2 className='TittleSectionTwo'>
          Mis Trabajos
        </h2>
        <div className="divContainerSectionTwo">
          <article className='articleSectionTwo' id='articleSectionTwo'>
            <div className='divTextArticleSectionTwo'>
              <h3>
                SPORT<span>DEVS</span>
              </h3>
              <p>
                Proyecto integrador final del curso de Full-Stack Web Developer
              </p>
              <a target='blank' href="https://github.com/GLHFranco322/SportDevs.git">
                <i className="fa-brands fa-github"></i></a>
            </div>
            <div className='divImageArticleSectionTwo'>
              <img src="/images/Sketches/SportDevs/backgroundSportDevs.png" style={{ '--position-image': 1 }} alt="" />
              <img src="/images/Sketches/SportDevs/backgroundSportDevs.png" style={{ '--position-image': 2 }} alt="" />
              <img src="/images/Sketches/SportDevs/backgroundSportDevs.png" style={{ '--position-image': 3 }} alt="" />
            </div>
          </article>
          <article className='articleSectionTwo_2' id='articleSectionTwo'>
            <div className='divTextArticleSectionTwo_2'>
              <h3>
                Instituto <span style={{'color':'#185d9e'}}>CFL</span> Buenos <span style={{'color':'#185d9e'}}>Aires</span>
              </h3>
              <p>
                Sitio Web creado con Google Sites para promocionar el establecimiento
              </p>
              <a target='blank' href="https://www.institutocflbsas.com">
                <img src="/images/Sketches/InstitutoCFLBsAs/InstitutoCFLBsAs.png" className='cflLogo' id='cflLogo' alt="" /></a>
            </div>
            <div className='divImageArticleSectionTwo_2'>
              <img src="/images/Sketches/InstitutoCFLBsAs/backgroundCFLBsAs.png" style={{ '--position-image': 1 }} alt="" />
              <img src="/images/Sketches/InstitutoCFLBsAs/backgroundCFLBsAs.png" style={{ '--position-image': 2 }} alt="" />
              <img src="/images/Sketches/InstitutoCFLBsAs/backgroundCFLBsAs.png" style={{ '--position-image': 3 }} alt="" />
            </div>
          </article>
          <article className='articleSectionTwo art3' id='articleSectionTwo'>
            <div className='divTextArticleSectionTwo_3'>
              <div className="imgContrainerFt">
                <img src="/images/Sketches/FurrorTerrae/FurrorTerraeIcon.png" className='furrorTerraeIcon' id='furrorTerraeIcon' alt="" />
              </div>
              <p>
                Proyecto anual de la materia Diseño Lúdico 1 en UNPAZ
              </p>
              <a target='blank' href="https://drive.google.com/file/d/12VoimNx_MdS_mhrDFDV_KhJBWTDBYb5z/view?usp=sharing">
                <i class="fa-solid fa-file-pdf"></i></a>
            </div>
            <div className='divImageArticleSectionTwo'>
              <img src="/images/Sketches/FurrorTerrae/backgroundFurrorTerrae.png" style={{ '--position-image': 1 }} alt="" />
              <img src="/images/Sketches/FurrorTerrae/backgroundFurrorTerrae.png" style={{ '--position-image': 2 }} alt="" />
            </div>
          </article>
          <article className='articleSectionTwo_2' id='articleSectionTwo'>
            <div className='divTextArticleSectionTwo_2'>
              <h3 style={{'color':'#7fffd4'}}>
                Duelo
              </h3>
              <p>
                Presentación para el proyecto final de la materia Gestion de Proyectos en UNPAZ
              </p>
              <a target='blank' href="https://www.canva.com/design/DAGH8fqjnsM/1MfnprTTHTxRKARjR5HEoQ/edit?utm_content=DAGH8fqjnsM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                <img src="/images/Sketches/Duelo/CanvaLogo.png" className='cflLogo' id='cflLogo' style={{'width':'3rem'}} alt="" /></a>
            </div>
            <div className='divImageArticleSectionTwo_2'>
              <img src="/images/Sketches/Duelo/backgroundDuelo.png" style={{ '--position-image': 1 }} alt="" />
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default SectionTwo