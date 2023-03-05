import './Style/Home.modules.scss';

import { Header } from '../../Components/Header/Header';
import { Type } from "../../Components/Profession/Type";
import { AboutMe } from '../../Components/About/AboutMe'; 
import { Skills } from '../../Components/Skills/Skills'; 
import { CoursesHome } from '../../Components/CoursesHome/CoursesHome';
import { ProjectHome } from '../../Components/ProjectHome/ProjectHome';
import { Curriculum } from '../../Components/Curriculum/Curriculum';
import { Footer } from '../../Components/Footer/Footer';
import { Scroll } from '../../Components/ScrollTop/Scroll';

import { BsGithub, BsLinkedin } from "react-icons/bs"; 
import { MdArrowDownward } from "react-icons/md";

import perfil  from './Images/perfil.webp';
import backgroundCover  from './Images/backgroundCover.webp';

export function Home() {
    return (
        <>            
            <section>
                <div className='img-background'></div> 
                    
                <Header /> 
                    <main id='Home' className="cover-content">                                              
                        <div className='color-background'/>

                        <figure className='background-cover'>
                            <img src={ backgroundCover } width={900} height={1010}  alt="back"/>
                        </figure>  

                        <section className="right-container">           
                            <article className="info-cover">
                                <aside className="cover-container-right">
                                    <h4 className="sub-title-cover">Olá, Eu sou</h4>
                                    <h1 className="title-cover">Bruno Costa C.</h1>
                                    <div className="professions-cover">           
                                        <Type />
                                    </div>                                            
                                    <a className="cover-btn" without rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1pqFAqsvr1371CYWpVH2jEXGej3EFP3fB/view?usp=share_link">Baixar CV</a>
                                </aside>           
                            </article>   
                            <figure className="profile-image">
                                <link rel="preload" href={ perfil } as="image" />    
                                <img rel="preload" width={400} height={440} src={ perfil } alt="perfil" />
                            </figure> 
                        </section>    

                        <section className='sociais'>
                            <section className="cover-social">
                                <article className="info-social-cover">
                                    <aside className="cover-social-container">
                                        <div className="cover-social-icon">        
                                            <ul>
                                                <li><a target="_blank" without rel="noreferrer" href="https://github.com/ibrunoc/"><BsGithub className='github-cover'/></a></li>
                                                <li><a target="_blank" without rel="noreferrer" href="https://www.linkedin.com/in/brunocostac/"><BsLinkedin className='linkedin-cover' /></a></li>
                                                <li><div className='line-social' /></li>
                                            </ul> 
                                        </div>          
                                    </aside>                           
                                </article> 
                            </section>  
                        </section>

                        <section className="scroll-down">
                            <a href="#About">
                                <MdArrowDownward className='arrow-down' />    
                            </a>
                        </section>      
                    </main>      
                <AboutMe />  
                <Skills />  
                <CoursesHome /> 
                <ProjectHome /> 
                <Curriculum />   
                <Footer />     
                <Scroll />
            </section>            
        </>
    );
}
