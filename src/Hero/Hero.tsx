import BoxReveal from '../components/ui/box-reveal'
import './hero.css'
import Particles from '../components/ui/particles';
import WordRotate from '../components/ui/word-rotate';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Hero(){
    useEffect(()=>{
        Aos.init({ duration: 1000 });
    },[])

    return(

        <section>
            <div className='wrapper-hero'>
            <div className="container-hero">    
                <div className="hero">
                <Particles className='particles'
                       quantity={300}
                       ease={80}
                       refresh/>
                <BoxReveal>
                <div className='mini-heading' >
                    <p>Hi there, my name is </p>
                </div>
                </BoxReveal>
                <BoxReveal>
                    <WordRotate className='font-title text-4xl sm:text-5xl font-bold text-slate-50 dark:text-white' words={["JM", "JUNGCO"]}/>
                </BoxReveal>
                <BoxReveal>
                <div className='content-hero' >
                    <h4>I design and develop for the users.</h4>             
                </div>   
                </BoxReveal>
                
                <div className="mini-intro">
                    <div className='mini-intro-box'>
                        <BoxReveal>
                    <p>I’m a student at Western Institute of Technology partaking the course of Information of Technology.</p>          
                    </BoxReveal>
                    </div>
                <div className="up-line"></div>
                <div className="top-line">
                    <p className="mid-line"> scroll</p>
                </div>
                <div className="bot-line"></div>
                </div>                
                </div>
                </div>
                </div>
        </section>
    );
}

export default Hero