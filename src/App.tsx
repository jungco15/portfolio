import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Project from './Projects/Project'
import Particles from './components/ui/particles'




function App() {

  return ( 
  <>
  <Particles className='particles z-0 hidden sm:block'
  quantity={500}
  ease={80}
  refresh size={0.4}/>
  <Particles className='particles z-0 block sm:hidden'
  quantity={200}
  ease={80}
  refresh size={0.4}/>
  <Header />
  <Hero/>
  <About />
  <Project />
  <Contact/>
  <Footer />
  </>
  )
}

export default App
