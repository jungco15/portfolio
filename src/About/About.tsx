import './about.css'
import myPic from '../assets/mi 1.png'
import BoxReveal from '../components/ui/box-reveal'
import Particles from '../components/ui/particles';


function About(){

    return(

        <div className="about" id='about'>
        <Particles className='particles'
                       quantity={300}
                       ease={80}
                       refresh/>
        <div className="container-about">
            <div className='section-header' >
            <BoxReveal>
            <h5>ABOUT ME</h5>
            </BoxReveal>
            <div className="line-header"></div>
            </div> 
            <div className="content-about">
                <div className="body-left">
            <BoxReveal> <p >Hi, I'm Jm and I grew up in Antique province. Now, I currently lived in iloilo around San-Miguel. My interest in computer started when I was 12 years old and I learned a lot of stuff through the internet. I did my upper secondary education in ICT from <a href='https://www.facebook.com/WrightColleges' target='-blank'>Wright Technological College of Antique.</a></p></BoxReveal>
            <BoxReveal>   <p>Now, I’m a student at <a href='https://www.facebook.com/WesternInstituteOfTechnology.Iloilo' target='blank'>Western Institute of Technology.</a> I've been teaching myself to build a accessible website through <a href='https://react.dev/' target='blank'>React</a> and play <a href='https://www.leagueoflegends.com/en-us/?utm_medium=card1%2Bwww.riotgames.com&utm_source=riotbar' target='-blank'> League of legends </a>on my free time. Meanwhile, my main focus is <a href='https://coursera.org/share/c052a870a2d632853ef195c7378b9fab' target='blank'>UX design</a> and become a entry level UX designer. My career goal is either to be a <a href='https://www.adobe.com/home?acomLocale=uk' target='blank'>Motion designer</a> or a <a href='https://www.figma.com/design/7uRupAO56ayLJMh3J3UXKl/Portfol?node-id=0-1&node-type=canvas&t=fa6RP0bMJknlCRIe-0' target='blank'>Visual designer</a> and I plan to pursue <a href='https://www.figma.com/ui-design-tool/?utm_source=google&utm_medium=cpc&utm_campaign=21049479575&utm_term=ui%20software&utm_content=692090159958&utm_adgroup=157943782686&gad_source=1&gclid=Cj0KCQjw3vO3BhCqARIsAEWblcCjZIUWshobR7x9tvuY6HN-C1OJvWopfZbh2ZXrAv_9ZJRR864_W1oaAk35EALw_wcB' target='blank'>UI design</a> and<a href='https://unity.com/' target='blank'> Game design.</a> </p></BoxReveal>
            <div className="bottom-content">
            <BoxReveal>
                <div className="bottom-list-header">
                <p>Here are some technologies I’ve been working on lately:</p>
                </div>
            </BoxReveal>
            <BoxReveal>
            <div className="bottom-list">
                <ul>
                    <li>HTML</li>
                    <li>Node.js</li>
                    <li>Shadcn/ui</li>
                    <li>Javascript</li>
                    <li>Css</li>
                    <li>Figma</li>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Tailwind</li>
                    <li>Typescript</li>
                </ul>
            </div>
            </BoxReveal>
            </div>
                 </div>
            <div className="body-right">                       
                   <a href='https://www.facebook.com/jm.jungco.15' title='Click mo bossing' target='blank'> <img src={myPic} alt="pic ni bossing"></img> </a>
            </div>
            </div>
        </div>
        </div>

    );

}

export default About