import './project.css'
import list from '../assets/list.svg'
import BoxReveal from '../components/ui/box-reveal'
import Particles from '../components/ui/particles'
import  AwsesomeTodos from '../assets/glass.svg'



function Projects (){
    return(

        <div className="projects" id='project'>
                    <Particles className='particles'
                       quantity={300}
                       ease={80}
                       refresh/>
        <div className="projects-container">  
                <div className="projects-header">
                <BoxReveal>
                    <h4>MY PROJECTS</h4>
                    <p>View My Latest Work</p>
                    </BoxReveal>      
                    </div>      
                      
                 <div className="projects-line-header"></div>
                    <div className="list-container">
                        <BoxReveal>
                        <div className="row-1">
                        <a href='https://listahanparamangqpal.onrender.com' target='_blank'><img src={AwsesomeTodos} alt='list'></img></a>
                            <img src={list} alt='list'></img>
                            <img src={list} alt='list'></img> 
                            <img src={list} alt='list'></img> 
                            <img src={list} alt='list'></img> 
                            <img src={list} alt='list'></img>
                            </div>
                        
                        </BoxReveal>
                    </div>
            </div>
            </div>

    )
}

export default Projects