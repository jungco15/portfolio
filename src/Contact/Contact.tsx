import BoxReveal from '../components/ui/box-reveal'
import Particles from '../components/ui/particles'
import './contact.css'

function Contact(){
    return(

        <div className='contact-container' id='contact'>
                    <Particles className='particles'
                       quantity={300}
                       ease={80}
                       refresh/>
            <div className='contact-content'>
           
                
                <div className='contact-heading'>
                <div className='contact-heading-box'>
                <BoxReveal>
                    <h4>Get In Touch</h4>
                    <p>Although I’m not currently looking for any opportunities, my inbox is always  available. Still if you want to get in touch and if want to play league with me, just say hi!. I’ll try my best to get back to you! You can also try to contact me in (63+9671629307).</p>
                    </BoxReveal>
                    </div> </div>
                
                <BoxReveal>
                <div className='contact-button'>
                   <a href='mailto:jmjungcobsit1@gmail.com'>Say Hi!</a>
                </div>
                </BoxReveal>
            </div>  
        </div>

    )
}

export default Contact