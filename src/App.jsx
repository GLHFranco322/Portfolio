import './App.css'
import {Header} from './header'
import { Footer } from './footer'
import { SectionOne } from './SectionOne'
import { SectionTwo } from './SectionTwo'
import { Slider } from './components/slider'

function App() {

  return (
    <div id='app' className='app'>
      <Header />
      <SectionOne />
      <Slider />
      <SectionTwo />
      <Footer />
    </div>
  )
}

export default App
