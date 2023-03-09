import './Style/About.modules.scss';
import { Container } from "./Style/Service";

import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BsCodeSlash, BsPencil, BsFillSkipStartFill } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile, HiOutlinePhoto } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";

import { VscDebugStart } from "react-icons/vsc";

import { useSpring, config } from 'react-spring';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function AboutMe() {
    const [props1, set1] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}));    
    const [props2, set2] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}));
    const [props3, set3] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}));
    const [props4, set4] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}));
    const [props5, set5] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}));
    const [props6, set6] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}));
    const [props7, set7] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}));
    const [props8, set8] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}));

    const handleMouseMove1 = (event) => {  set1({ xys: calc(event.clientX, event.clientY) });  };
    const handleMouseMove2 = (event) => {  set2({ xys: calc(event.clientX, event.clientY) });  };
    const handleMouseMove3 = (event) => {  set3({ xys: calc(event.clientX, event.clientY) });  };
    const handleMouseMove4 = (event) => {  set4({ xys: calc(event.clientX, event.clientY) });  };
    const handleMouseMove5 = (event) => {  set5({ xys: calc(event.clientX, event.clientY) });  };
    const handleMouseMove6 = (event) => {  set6({ xys: calc(event.clientX, event.clientY) });  };
    const handleMouseMove7 = (event) => {  set7({ xys: calc(event.clientX, event.clientY) });  };
    const handleMouseMove8 = (event) => {  set8({ xys: calc(event.clientX, event.clientY) });  };

    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1];
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    return (
        <>
            <div id="About">
                <main className="about-zone" data-aos="fade-up">
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

                <main className="service-zone" data-aos="fade-up">  
                    <section className="service-info">
                        <Swiper             
                            style={{'--swiper-navigation-color': 'var(--subtitle-color)',}} loop={true} pagination={{clickable: true, }} navigation={true} 
                            breakpoints={{
                                640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                },
                                768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                                },
                                1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                                },
                            }} modules={[Pagination, Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <article className="service-container">
                                    <Container className="service" onMouseEnter={() => {document.addEventListener('mousemove', handleMouseMove1);}}    onMouseLeave={() => {set1({ xys: [0, 0, 1] }); document.removeEventListener('mousemove', handleMouseMove1)}} style={{ transform: props1.xys.interpolate(trans) }}>
                                        <div className="service-icon">
                                            <BsCodeSlash className='iconService' />                                
                                            <h4 className="service-title">Desenvolvedor Web</h4>                                                                                                                                                                                                                                                                              
                                            <p>Dev. Full-Stack, mas estou focado no Front-End.</p>
                                        </div>
                                    </Container>
                                </article>
                            </SwiperSlide>

                            <SwiperSlide>
                                <article className="service-container">
                                    <Container className="service" onMouseEnter={() => {document.addEventListener('mousemove', handleMouseMove2);}}    onMouseLeave={() => {set2({ xys: [0, 0, 1] }); document.removeEventListener('mousemove', handleMouseMove2)}} style={{ transform: props2.xys.interpolate(trans) }}>
                                        <div className="service-icon">
                                            <HiOutlinePhoto className='iconService' />                                
                                            <h4 className="service-title">Design</h4>                                                                                                                                                                                                                                                                              
                                            <p>Sei criar Design no geral, aplicativos, icones, web, artes, etc...</p>
                                        </div>
                                    </Container>
                                </article>
                            </SwiperSlide>

                            <SwiperSlide>
                                <article className="service-container">
                                    <Container className="service" onMouseEnter={() => {document.addEventListener('mousemove', handleMouseMove3);}}    onMouseLeave={() => {set3({ xys: [0, 0, 1] }); document.removeEventListener('mousemove', handleMouseMove3)}} style={{ transform: props3.xys.interpolate(trans) }}>
                                        <div className="service-icon">
                                            <HiOutlineDevicePhoneMobile className='iconService' />
                                            <h4 className="service-title">Desenvolvedor Mobile</h4>                                                                                                                                                                                                                                                       
                                            <p>Estou aprendendo Desenvolvimento Mobile com React Native.</p>
                                        </div>
                                    </Container>
                                </article>
                            </SwiperSlide>

                            <SwiperSlide>
                                <article className="service-container">
                                    <Container className="service" onMouseEnter={() => {document.addEventListener('mousemove', handleMouseMove4);}}    onMouseLeave={() => {set4({ xys: [0, 0, 1] }); document.removeEventListener('mousemove', handleMouseMove4)}} style={{ transform: props4.xys.interpolate(trans) }}>
                                        <div className="service-icon">                                    
                                            <IoGameControllerOutline className='iconService' />
                                            <h4 className="service-title">Desenvolvedor de Games</h4>                                                                                                                                                  
                                            <p>Criar com Games com Unity, Unreal e GamerMarker.</p>
                                        </div>
                                    </Container>
                                </article> 
                            </SwiperSlide>

                            <SwiperSlide>
                                <article className="service-container">
                                    <Container className="service" onMouseEnter={() => {document.addEventListener('mousemove', handleMouseMove5);}}    onMouseLeave={() => {set5({ xys: [0, 0, 1] }); document.removeEventListener('mousemove', handleMouseMove5)}} style={{ transform: props5.xys.interpolate(trans) }}>
                                        <div className="service-icon">
                                            <BsFillSkipStartFill className='iconService' />
                                            <h4 className="service-title">Animação</h4>                                                                                                                      
                                            <p>Criar animações com Cinema 4D e 3Ds Max.</p>
                                        </div>
                                    </Container>
                                </article>
                            </SwiperSlide>

                            <SwiperSlide>
                                <article className="service-container">
                                    <Container className="service" onMouseEnter={() => {document.addEventListener('mousemove', handleMouseMove6);}}    onMouseLeave={() => {set6({ xys: [0, 0, 1] }); document.removeEventListener('mousemove', handleMouseMove6)}} style={{ transform: props6.xys.interpolate(trans) }}>
                                        <div className="service-icon">
                                            <BsPencil className='iconService'/>
                                            <h4 className="service-title">Desenhos</h4>                                                                                                                                                                                
                                            <p>Sei criar desenho com PaintToolSai e Illustrator.</p>
                                        </div>
                                    </Container>
                                </article>
                            </SwiperSlide>

                            <SwiperSlide>
                                <article className="service-container">
                                    <Container className="service" onMouseEnter={() => {document.addEventListener('mousemove', handleMouseMove7);}}    onMouseLeave={() => {set7({ xys: [0, 0, 1] }); document.removeEventListener('mousemove', handleMouseMove7)}} style={{ transform: props7.xys.interpolate(trans) }}>
                                        <div className="service-icon">
                                            <VscDebugStart className='iconService'/>
                                            <h4 className="service-title">Edição</h4>                                                                                                                                                                                                    
                                            <p>Editar vídeos com After Effects e Camtasia Studio.</p>
                                        </div>
                                    </Container>
                                </article>
                            </SwiperSlide>

                            <SwiperSlide>
                                <article className="service-container">
                                    <Container className="service" onMouseEnter={() => {document.addEventListener('mousemove', handleMouseMove8);}}    onMouseLeave={() => {set8({ xys: [0, 0, 1] }); document.removeEventListener('mousemove', handleMouseMove8)}} style={{ transform: props8.xys.interpolate(trans) }}>
                                        <div className="service-icon">
                                            <MdComputer className='iconService'/>
                                            <h4 className="service-title">Montagem de Computador</h4>                                                                                                                                                                                                                      
                                            <p>Montagem e Desmontagem de um PC do Zero.</p>
                                        </div>
                                    </Container>
                                </article>
                            </SwiperSlide>                        
                        </Swiper>
                    </section>
                </main> 
            </div>            
        </>
    );
}