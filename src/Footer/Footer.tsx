import fb from '../assets/white.svg'
import ig from '../assets/instagram.svg'
import './footer.css'



function Footer (){
    return(
<div className="footer z-50">
    <div className="upper-content">
        <p>Build and Designed by John Michael Jungco</p>
    </div>
    <div className="below-content z-50">
        <p>Follow me on</p>
        <a href="https://www.instagram.com/jmjungco15/" target='_blank'>
            <img src={ig} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/jm.jungco.15/" target='_blank'>
            <img src={fb} alt="Facebook" />
        </a>
    </div>
</div>     
    )
}

export default Footer