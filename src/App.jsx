import './App.css'
import Header from './header.jsx'
import Footer  from './footer.jsx'
import SectionOne from './sectionOne.jsx'
import SectionTwo  from './sectionTwo.jsx'
import SectionThree from './SectionThree.jsx'
import Slider from './components/slider.jsx'

function App() {

  return (
    <div id='app' className='app'>
      <Header />
      <SectionOne />
      <Slider />
      <SectionTwo />
      <Slider />
      <SectionThree />
      <Footer />
    </div>
  )
}

export default App
