import './Style/Experience.modules.scss';

import Ocupop from "./Images/ocupop.webp";

export function Experience() { 
    return (
        <>                
            <main id='Experience' className="experience-zone" data-aos="fade-up"> 
                <section className="container">
                    <article className="section-title">
                        <h2 className="title"><span>03.</span> Experiência</h2>
                        <hr />
                    </article> 

                    <div className='background' />

                    <article className='experience'>
                        <div className='container-experience'>   
                            <div className='info-company'>       
                                <img src={Ocupop} alt="OcuPop Oftalmologia"></img>
                                <div>
                                    <h1>OcuPop Oftalmologia</h1>
                                    <p className='data-experience'>02/2023 - Presente</p>
                                </div>
                            </div> 

                            <div className='info-experience'>
                                <div className='container-info-experience'>
                                    <h2>Desenvolvedor Web e Web Design</h2>
                                    <p>Realizo a criação de projetos utilizando o React.JS. Criação de websites responsivos focados na experiência do usuário utilizando o Figma e o Photoshop para prototipagem.</p>
                                </div>                               
                            </div>
                        </div>

                        <div className='tags'>   
                            <div className='tag'>React.JS</div>
                            <div className='tag'>Styled-Components</div>
                            <div className='tag'>PHP</div>
                            <div className='tag'>Figma</div>
                            <div className='tag'>Photoshop</div>
                        </div>                        
                    </article>                    
                </section>                                
            </main>             
            <div className='background-swish-down' />       
        </>
    );
}
