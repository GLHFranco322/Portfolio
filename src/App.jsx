import './App.css'
import Header from './Header'
import Footer  from './Footer'
import SectionOne from './SectionOne'
import SectionTwo  from './SectionTwo'
import SectionThree from './SectionThree'
import Slider from './components/slider'

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
