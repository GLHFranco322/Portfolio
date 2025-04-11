import './App.css'
import Header from './Header.jsx'
import Footer  from './Footer.jsx'
import SectionOne from './SectionOne.jsx'
import SectionTwo  from './SectionTwo.jsx'
import SectionThree from './SectionThree.jsx'
import Slider from './components/Slider.jsx'

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
