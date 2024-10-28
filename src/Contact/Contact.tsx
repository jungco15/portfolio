import BoxReveal from '../components/ui/box-reveal'
import './contact.css'
import cv from '../../src/assets/CV.pdf'

function Contact(){
    return(

        <div className='contact-container' id='contact'>
            <div className='contact-content'>              
                <div className='contact-heading'>
                <div className='contact-heading-box'>
                <BoxReveal>
                    <h4>Get In Touch</h4>
                    <p>Although I’m not currently looking for any opportunities, my inbox is always  available. Still if you want to get in touch and if want to play league with me, just say hi!. I’ll try my best to get back to you! You can also try to contact me in (63+9671629307).</p>
                    </BoxReveal>
                    </div> 
                    </div>
                    <BoxReveal>
                    <div className='pdf py-1 flex'>
                    <a href={cv} download="CV.pdf" target="_blank" rel="noopener noreferrer">Download my CV</a>
                    </div>
                    </BoxReveal>
                    
                
                <BoxReveal>
                <div className='contact-button'>
                   <a href='https://mail.google.com/mail/' target='_blank'>Say Hi!</a>
                </div>
                </BoxReveal>
            </div>  
        </div>

    )
}

export default Contact