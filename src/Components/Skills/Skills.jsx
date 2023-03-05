import './Style/Skills.modules.scss';
import { useState } from 'react';

import { AiOutlineHtml5 } from "react-icons/ai";
import { BsPencil, BsFillSkipStartFill, BsGithub } from "react-icons/bs";
import { DiJqueryLogo, DiPhotoshop } from "react-icons/di";
import { FaBootstrap, FaJava, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoSass, IoLogoJavascript, IoLogoPython, IoLogoFigma } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { TbBrandCss3, TbBrandReactNative } from "react-icons/tb";
import { SiReact, SiStyledcomponents, SiPhp, SiTypescript, SiCsharp, SiCinema4D, SiAdobeaftereffects, SiAdobeillustrator } from "react-icons/si";

export function Skills() {
    const [isVisibleFront, setIsVisibleFront] = useState(false);    
    const [isActiveFront, setIsActiveFront] = useState(false);
  
    const toggleVisibilityFront = () => {
      setIsVisibleFront(!isVisibleFront);
      setIsActiveFront(!isActiveFront);
    };

    const [isVisibleBack, setIsVisibleBack] = useState(false);    
    const [isActiveBack, setIsActiveBack] = useState(false);

    const toggleVisibilityBack = () => {
        setIsVisibleBack(!isVisibleBack);
        setIsActiveBack(!isActiveBack);
    };

    
    const [isVisibleO, setIsVisibleO] = useState(false);    
    const [isActiveO, setIsActiveO] = useState(false);

    const toggleVisibilityO = () => {
        setIsVisibleO(!isVisibleO);
        setIsActiveO(!isActiveO);
    };

    return (
        <>
            <div>
                <main id='Skills' className="skills-zone">            
                    <section className="section-title">
                        <h2 className="title"><span>02.</span> Skills</h2>
                        <hr />
                    </section>   

                    <section className="skills">
                        <button className="buttonSkills" onClick={toggleVisibilityFront}>   
                            <aside className={`hamburgerFront ${isActiveFront ? "active" : ""}`} onClick={toggleVisibilityFront}>                           					
                                <span className="barSkills"></span>
                                <span className="barSkills"></span>
                            </aside>   
                            <h1>Front-End</h1>
                        </button>  
                        {isVisibleFront &&
                        <article id="frontEnd" className='frontEnd'>                        
                            <div className='icon'>
                                <AiOutlineHtml5 className='icon-skills' size={60} />
                                <h2>HTML</h2>
                            </div>
                            <div className='icon'>                 
                                <TbBrandCss3 className='icon-skills' size={60} />                           
                                <h2>CSS</h2>
                            </div>
                            <div className='icon'>       
                                <IoLogoJavascript className='icon-skills' size={60} />                                    
                                <h2>JavaScript</h2>
                            </div>
                            <div className='icon'>
                                <SiReact className='icon-skills' size={60} />
                                <h2>React.JS</h2>
                            </div>
                            <div className='icon'>                              
                                <IoLogoSass className='icon-skills' size={60} />
                                <h2>SaSS</h2>              
                            </div>
                            <div className='icon'>                              
                                <SiStyledcomponents className='icon-skills' size={60} />
                                <h2>Styled-Components</h2>              
                            </div>
                            <div className='icon'>
                                <DiJqueryLogo className='icon-skills' size={60} />
                                <h2>JQuery</h2>
                            </div>
                            <div className='icon'>
                                <SiReact className='icon-skills' size={60} />
                                <h2>Next.JS</h2>
                            </div>
                            <div className='icon'>
                                <FaBootstrap className='icon-skills' size={60} />
                                <h2>BootStrap</h2>
                            </div>                                
                        </article>
                            }      
                    </section>                     

                    <section className="skills">
                        <button className="buttonSkills" onClick={toggleVisibilityBack}>   
                            <aside className={`hamburgerBack ${isActiveBack ? "active" : ""}`} onClick={toggleVisibilityBack}>                           	                           					
                                <span className="barSkills"></span>
                                <span className="barSkills"></span>
                            </aside>
                            <h1>Back-End</h1>
                        </button> 
                        {isVisibleBack &&
                        <article id="backEnd" className='backEnd'>
                            <div className='icon'>
                                <SiPhp className='icon-skills' size={60} />
                                <h2>PHP</h2>
                            </div>
                            <div className='icon'>
                                <IoLogoPython className='icon-skills' size={60} />
                                <h2>Python</h2>
                            </div>  
                            <div className='icon'>
                                <SiTypescript className='icon-skills' size={60} />
                                <h2>TypeScript</h2>
                            </div>
                            <div className='icon'>
                                <FaNodeJs className='icon-skills' size={60} />
                                <h2>NodeJS</h2>
                            </div>
                            <div className='icon'>
                                <TbBrandReactNative className='icon-skills' size={60} />
                                <h2>React Native</h2>
                            </div>
                            <div className='icon'>
                                <FaJava className='icon-skills' size={60} />
                                <h2>Java</h2>
                            </div>  
                            <div className='icon'>
                                <SiCsharp className='icon-skills' size={60} />
                                <h2>C#</h2>
                            </div>        
                            <div className='icon'>
                                <GrMysql className='icon-skills' size={60} />
                                <h2>MySQL</h2>
                            </div>
                        </article>
                        }          
                    </section> 

                    <section className="skills">                        
                        <button className="buttonSkills"onClick={toggleVisibilityO}>   
                            <aside className={`hamburgerO ${isActiveO ? "active" : ""}`} onClick={toggleVisibilityO}>  
                                <span className="barSkills"></span>
                                <span className="barSkills"></span>
                            </aside>                                
                            <h1>Designer, Animação, Desenho e Hardware</h1>	                                  
                        </button> 
                        {isVisibleO &&   
                        <article id="outros" className='others'>            
                                <div className='icon'>
                                    <BsGithub className='icon-skills' size={60} />
                                    <h2>GitHub</h2>
                                </div>
                                <div className='icon'>
                                    <FaGitAlt className='icon-skills' size={60} />
                                    <h2>Git</h2>
                                </div>                                 
                                <div className='icon'>
                                    <DiPhotoshop className='icon-skills' size={60} />
                                    <h2>PhotoShop</h2>
                                </div>
                                <div className='icon'>
                                    <BsPencil className='icon-skills' size={60} />
                                    <h2>PaintToolSai</h2>
                                </div>                                 
                                <div className='icon'>
                                    <IoLogoFigma className='icon-skills' size={60} />
                                    <h2>Figma</h2>
                                </div>  
                                <div className='icon'>
                                    <SiCinema4D className='icon-skills' size={60} />
                                    <h2>Cinema4D</h2>
                                </div>                           
                                <div className='icon'>
                                    <BsFillSkipStartFill className='icon-skills' size={60} />
                                    <h2>3DS Max</h2>
                                </div>                         
                                <div className='icon'>
                                    <SiAdobeillustrator className='icon-skills' size={60} />
                                    <h2>Illustrator</h2>
                                </div>     
                                <div className='icon'>
                                    <SiAdobeaftereffects className='icon-skills' size={60} />
                                    <h2>After Effects</h2>
                                </div>  
                                <div className='icon'>
                                    <MdComputer className='icon-skills' size={60} />
                                    <h2>Montagem de PC</h2>
                                </div>
                        </article>
                        }      
                    </section>
                </main>                  
            </div>               
        </>
    );
}  