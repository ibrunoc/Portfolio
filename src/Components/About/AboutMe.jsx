import './Style/About.modules.scss';

import { BsFillCalendarDateFill } from 'react-icons/bs';

export function AboutMe() {
    return (
        <>
            <div id="About">
                <main  className="about-zone" data-aos="fade-up">
                    <section className="container">
                        <article className="section-title">
                            <h2 className="title"><span>01.</span> Sobre mim</h2>
                            <hr />                         
                        </article> 
                        
                        <article className="about-content">
                            <aside className='about' data-aos="fade-up">
                                <h5 class="about-title">&lt;?php echo '&lt;p&gt; <span>Hello World</span> 👋🌎 &lt;/p&gt;'; ?&gt;</h5><br />
                                <p>Eu me chamo Bruno, atualmente tenho 21 anos, e estou morando em Jandira-SP, Atualmente estou no meu primeiro emprego como programador, trabalho na Ocupop como Desenvolvedor Full-Stack Jr e Design Web.</p><br />   
                                <p>Já finalizei o ensino médio, fiz curso na Microlins e no Instituto PROA e faço diversos cursos na área de TI na Danki Code e na Udemy EAD, sou programador Full-Stack Jr, mas estou focado no desenvolvimento Front-End e na área de design, e estou fazendo faculdade de Análise e Desenvolvimento de Sistema na Estácio.</p>                                    <br />    
                                <p>Tenho conhecimentos em programação web, de games e de aplicativos. Na área de design no geral, sei fazer desenhos, animações, e editar vídeos. Tenho conhecimento básico na área de banco de dados, e também sei montar computadores.</p>                                        <br />    
                                <p>Sou bastante esforçado, focado, dedicado, criativo, detalhista, e objetivo. Gosto sempre de aprender coisas novas e ampliar meus conhecimentos, principalmente quando o assunto é tecnologia que eu amo. Bom esse foi um “pequeno” resumo sobre mim e meus conhecimentos, muito obrigado!</p>
                            </aside>
                            
                            <aside className='information-about' data-aos="fade-up">                          
                                <div className="info-icon">
                                    <BsFillCalendarDateFill className='aboutIcon' />
                                    <p><span>Data de nascimento:</span> 06 Abril 2002</p>
                                </div>
                            </aside>
                        </article> 
                    </section> 
                </main> 
            </div>            
        </>
    );
}