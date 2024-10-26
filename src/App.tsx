import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Project from './Projects/Project'
import Preloader from './Preloader'
import { useEffect, useState } from 'react'


function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return ( 
    <>
  <Preloader loading={loading} />
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
