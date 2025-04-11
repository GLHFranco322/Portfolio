import './App.css'
import {Header} from './header'
import { Footer } from './footer'
import { SectionOne } from './sectionOne'
import { SectionTwo } from './sectionTwo'
import { SectionThree } from './sectionThree'
import { Slider } from './components/slider'

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
