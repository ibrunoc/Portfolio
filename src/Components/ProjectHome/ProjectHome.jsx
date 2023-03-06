import './Style/ProjectHome.modules.scss';
import { useState } from 'react';

import Blind from './Images/blind.webp';
import Governo from './Images/governo.webp';
import Hotel from './Images/hotel.webp';
import Instagram from './Images/Instagram.webp';
import Pizzaria from './Images/pizzaria.webp';
import Placeup from './Images/placeup.webp';
import Pokedex from './Images/pokedex.webp';
import Todolist from './Images/todolist.webp';
import Caoselheiro from './Images/caoselheiro.webp';

import { AiOutlineHtml5, AiOutlineClose } from "react-icons/ai";
import { DiPhotoshop } from "react-icons/di";
import { FaJava, FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import { TbBrandCss3 } from "react-icons/tb";
import { SiReact, SiStyledcomponents, SiAdobeillustrator } from "react-icons/si";

import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        maxWidth: '2000px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export function ProjectHome() {

    const [modalIsOpenAni, setIsOpenAni] = useState(false);
    const [modalIsOpenGov, setIsOpenGov] = useState(false);
    const [modalIsOpenPiz, setIsOpenPiz] = useState(false);
    const [modalIsOpenPla, setIsOpenPla] = useState(false);
    const [modalIsOpenIns, setIsOpenIns] = useState(false);
    const [modalIsOpenTdl, setIsOpenTdl] = useState(false);
    const [modalIsOpenPok, setIsOpenPok] = useState(false);
    const [modalIsOpenBli, setIsOpenBli] = useState(false);
    const [modalIsOpenEco, setIsOpenEco] = useState(false);
  
     function openModalAni() {  setIsOpenAni(true); }  
    function closeModalAni() { setIsOpenAni(false); }

    function openModalGsp() {  setIsOpenGov(true); }  
    function closeModalGsp() { setIsOpenGov(false); }

    function openModalPiz() {  setIsOpenPiz(true); }  
    function closeModalPiz() { setIsOpenPiz(false); }

    function openModalPla() {  setIsOpenPla(true); }  
    function closeModalPla() { setIsOpenPla(false); }

    function openModalIns() {  setIsOpenIns(true); }  
    function closeModalIns() { setIsOpenIns(false); }

    function openModalTdl() {  setIsOpenTdl(true); }  
    function closeModalTdl() { setIsOpenTdl(false); }

    function openModalPok() {  setIsOpenPok(true); }  
    function closeModalPok() { setIsOpenPok(false); }

    function openModalBli() {  setIsOpenBli(true); }  
    function closeModalBli() { setIsOpenBli(false); }

    function openModalEco() {  setIsOpenEco(true); }  
    function closeModalEco() { setIsOpenEco(false); }

    return (
        <>    
            <div id="Project"> 
                <main className="projects-home">
                    <section className="container">
                        <section className="section-title">
                            <h2 className="title"><span>05.</span> Projetos</h2>
                            <hr /><p>Alguns dos projetos feito por mim, em grupo e individual.</p>   
                        </section> 
                        
                        <section className="projects-info">                                
                            <article className="project-container">
                                <aside className="project">
                                    <div className="project-image" onClick={openModalAni}>
                                        <h3 className='date-project'>10 de Março de 2022</h3>
                                        <img width={900} height={400} src={Hotel} alt="hotel" />                                         
                                        <AiOutlineHtml5 className='languages-project' size={20} />
                                        <TbBrandCss3 className='languages-project' size={20} />  
                                        <IoLogoJavascript className='languages-project' size={20} />                                                                                    
                                        <DiPhotoshop className='languages-project' size={20} />  
                                        <IoLogoFigma className='languages-project' size={20} />  
                                        <h2>Animal Space</h2>
                                        <p>-Desenvolvimento Web</p>
                                    </div>                                    
                                </aside> 
                            </article>                           

                            <article className="project-container">
                                <aside className="project">
                                    <figure className="project-image" onClick={openModalGsp}>                                        
                                        <h3 className='date-project'>28 de Março de 2022</h3>
                                        <img width={900} height={400} src={Governo} alt="governo" />                              
                                        <AiOutlineHtml5 className='languages-project' size={20} />
                                        <TbBrandCss3 className='languages-project' size={20} />  
                                        <IoLogoJavascript className='languages-project' size={20} />                                                                                   
                                        <DiPhotoshop className='languages-project' size={20} />  
                                        <IoLogoFigma className='languages-project' size={20} /> 
                                        <h2>Governo de SP</h2>
                                        <p>-Desenvolvimento Web</p>
                                    </figure>                                                    
                                </aside>
                            </article>

                            <article className="project-container"> 
                                <aside className="project">
                                    <figure className="project-image" onClick={openModalPiz}>                                                      
                                        <h3 className='date-project'>4 de Abril de 2022</h3>
                                        <img width={900} height={400} src={Pizzaria} alt="pizzaria" />
                                        <AiOutlineHtml5 className='languages-project' size={20} />
                                        <TbBrandCss3 className='languages-project' size={20} />  
                                        <IoLogoJavascript className='languages-project' size={20} />                                                                                  
                                        <DiPhotoshop className='languages-project' size={20} />  
                                        <IoLogoFigma className='languages-project' size={20} /> 
                                        <h2>Água na Boca</h2>
                                        <p>-Desenvolvimento Web</p>
                                    </figure>                                    
                                </aside> 
                            </article>    

                            <article className='projects-container'>
                                <aside className="placeup-container"> 
                                    <aside className="project">
                                        <figure className="project-image" onClick={openModalPla}>
                                            <h3 className='date-project'>30 de Junho de 2022</h3>
                                            <img width={900} height={800} src={Placeup} alt="instagram" />                                                                           
                                            <SiReact className='languages-project' size={20} />
                                            <SiStyledcomponents className='languages-project' size={20} />  
                                            <IoLogoJavascript className='languages-project' size={20} />     
                                            <FaJava className='languages-project' size={20} />             
                                            <GrMysql className='languages-project' size={20} />                                                                   
                                            <DiPhotoshop className='languages-project' size={20} />  
                                            <SiAdobeillustrator className='languages-project' size={20} /> 
                                            <IoLogoFigma className='languages-project' size={20} /> 
                                            <FaGitAlt className='languages-project' size={20} /> 
                                            <h2>PlaceUP</h2> 
                                            <p>-Desenvolvimento Web</p>
                                        </figure>                                        
                                    </aside>
                                </aside>  

                                <article className='instagram-todo-container'>
                                    <aside className="instagram">     
                                        <aside className="project">
                                            <figure className="project-image" onClick={openModalIns}>
                                                <h3 className='date-project'>29 de Abril de 2022</h3>
                                                <img width={900} height={400} src={Instagram} alt="instagram" />                                  
                                                <SiReact className='languages-project' size={20} />
                                                <TbBrandCss3 className='languages-project' size={20} />  
                                                <IoLogoJavascript className='languages-project' size={20} />  
                                                <FaGitAlt className='languages-project' size={20} /> 
                                                <h2>Clone do Instagram</h2>
                                                <p>-Desenvolvimento Web</p>
                                            </figure>
                                        </aside> 
                                    </aside>  
                                           
                                    <article className="todo">                                        
                                        <aside className="project">
                                            <figure className="project-image" onClick={openModalTdl}>
                                                <h3 className='date-project'>21 de Julho de 2022</h3>
                                                <img width={900} height={400} src={ Todolist } alt="Todolist" />
                                                <AiOutlineHtml5 className='languages-project' size={20} />
                                                <TbBrandCss3 className='languages-project' size={20} />  
                                                <IoLogoJavascript className='languages-project' size={20} />  
                                                <FaGitAlt className='languages-project' size={20} /> 
                                                <h2>ToDo List</h2>
                                                <p>-Desenvolvimento Web</p>
                                            </figure>                                            
                                        </aside>  
                                    </article>   
                                </article>                                    
                            </article> 

                            <article className='projects-container'>
                                <aside className="pokedex-container"> 
                                    <aside className="project">
                                            <figure className="project-image" onClick={openModalPok}>
                                                <h3 className='date-project'>4 de Agosto de 2022</h3>
                                                <img width={900} height={400} src={Pokedex} alt="Pokedex" />
                                                <AiOutlineHtml5 className='languages-project' size={20} />
                                                <TbBrandCss3 className='languages-project' size={20} />  
                                                <IoLogoJavascript className='languages-project' size={20} />  
                                                <FaGitAlt className='languages-project' size={20} /> 
                                                <h2>Pokedex</h2>
                                                <p>-Desenvolvimento Web</p>
                                        </figure>                                    
                                    </aside> 
                                </aside>  

                                <article className='blind-container'>  
                                        <aside className="project">
                                            <figure className="project-image" onClick={openModalBli}>
                                                <h3 className='date-project'>5 de Junho de 2022</h3>
                                                <img width={900} height={400} src={ Blind } alt="Blind" />
                                                <SiReact className='languages-project' size={20} />
                                                <SiStyledcomponents className='languages-project' size={20} />  
                                                <IoLogoJavascript className='languages-project' size={20} />  
                                                <IoLogoFigma className='languages-project' size={20} /> 
                                                <FaGitAlt className='languages-project' size={20} /> 
                                                <h2>Blind Vision</h2>
                                                <p>-Desenvolvimento Web</p>
                                            </figure>     
                                    </aside>  
                                </article>                                    
                            </article> 

                            <article className="project-container"> 
                                <aside className="project">
                                    <figure className="project-image" onClick={openModalEco}>
                                        <h3 className='date-project'>22 de Novembro de 2022</h3>
                                        <img width={900} height={400} src={ Caoselheiro } alt="Caoselheiro" />
                                        <SiReact className='languages-project' size={20} />
                                        <SiStyledcomponents className='languages-project' size={20} />  
                                        <IoLogoJavascript className='languages-project' size={20} />                                                           
                                        <DiPhotoshop className='languages-project' size={20} />  
                                        <IoLogoFigma className='languages-project' size={20} /> 
                                        <FaGitAlt className='languages-project' size={20} /> 
                                        <h2>Caoselheiro</h2>
                                        <p>-Desenvolvimento Web</p>
                                    </figure>                                       
                                </aside> 
                            </article>                            
                        </section> 
                    </section> 
                </main>  
            </div>                

            <section>
                <Modal className="modal" isOpen={modalIsOpenAni} style={customStyles} onRequestClose={closeModalAni}>
                    <button className='close' onClick={closeModalAni}><AiOutlineClose className='x' /></button>
                    <div className="project-image-modal">
                        <div className='information-modal'>
                            <a href="https://animal-space.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Hotel} alt="Hotel Animal Space" /></a>                                         
                            <div>
                                <a href="https://animal-space.vercel.app/" rel="noreferrer" target="_blank"><h2>Animal Space</h2></a>
                                <p>Desenvolvimento Web</p>
                                <p className='description-modal'>Um tema de projeto sortiado e feito no curso do Proa. Um hotel para animais, este projeto foi feito em grupo. Desenvolvemos o design do site pelo figma.  </p>                                        
                                <h3 className='date-project-modal'>10 de Março de 2022</h3>
                                <div className='langueges-modal'>
                                    <h1>Linguagens utilizadas para criação: </h1>
                                    <AiOutlineHtml5 className='languages-project-modal' size={20} />
                                    <TbBrandCss3 className='languages-project-modal' size={20} />  
                                    <IoLogoJavascript className='languages-project-modal' size={20} />                                                                                    
                                    <DiPhotoshop className='languages-project-modal' size={20} />  
                                    <IoLogoFigma className='languages-project-modal' size={20} />  
                                </div>
                                <div className='container-btn-modal'>
                                    <a href="https://animal-space.vercel.app/" rel="noreferrer" target="_blank"><button className='main-btn'>Link do projeto</button></a>
                                    <a href="https://github.com/ibrunoc/Animal-Space" rel="noreferrer" target="_blank"><button className='main-btn'>Link do repositório</button></a>
                                </div>
                            </div>                                    
                        </div>                            
                    </div>                                    
                </Modal>                                  
                
                <Modal className="modal" isOpen={modalIsOpenGov} style={customStyles} onRequestClose={closeModalGsp}>
                    <button className='close' onClick={closeModalGsp}><AiOutlineClose className='x' /></button>
                    <div className="project-image-modal">
                        <div className='information-modal'>
                            <a href="https://governo-de-sp.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Governo} alt="Governo de SP" /></a>                                         
                            <div>
                                <a href="https://governo-de-sp.vercel.app/" rel="noreferrer" target="_blank"><h2>Governo de SP</h2></a>
                                <p>Desenvolvimento Web</p>
                                <p className='description-modal'>Um projeto feito no Proa em grupo, escolher um site e recriar o site do zero e o design. O site que escolhemos para recriar o site do Governo de SP, já que o design não agradava.</p>                                        
                                <h3 className='date-project-modal'>28 de Março de 2022</h3>
                                <div className='langueges-modal'>
                                    <h1>Linguagens utilizadas para criação: </h1>
                                    <AiOutlineHtml5 className='languages-project-modal' size={20} />
                                    <TbBrandCss3 className='languages-project-modal' size={20} />  
                                    <IoLogoJavascript className='languages-project-modal' size={20} />                                                                                    
                                    <DiPhotoshop className='languages-project-modal' size={20} />  
                                    <IoLogoFigma className='languages-project-modal' size={20} />  
                                </div>
                                <div className='container-btn-modal'>
                                    <a href="https://governo-de-sp.vercel.app/" rel="noreferrer" target="_blank"><button className='main-btn'>Link do projeto</button></a>
                                    <a href="https://github.com/ibrunoc/Governo-de-SP" rel="noreferrer" target="_blank"><button className='main-btn'>Link do repositório</button></a>
                                </div>     
                            </div>                                    
                        </div>                                 
                    </div>                                    
                </Modal>  

                <Modal className="modal" isOpen={modalIsOpenPiz} style={customStyles} onRequestClose={closeModalPiz}>
                    <button className='close' onClick={closeModalPiz}><AiOutlineClose className='x' /></button>
                    <div className="project-image-modal">
                        <div className='information-modal'>
                            <a href="https://agua-na-boca.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Pizzaria} alt="Pizzaria Água na Boca" /></a>                                         
                            <div>
                                <a href="https://agua-na-boca.vercel.app/" rel="noreferrer" target="_blank"><h2>Água na Boca</h2></a>
                                <p>Desenvolvimento Web</p>
                                <p className='description-modal'>Uma landing page para uma pizzaria do meu bairro.</p>                                        
                                <h3 className='date-project-modal'>4 de Abril de 2022</h3>
                                <div className='langueges-modal'>
                                <h1>Linguagens utilizadas para criação: </h1>
                                    <AiOutlineHtml5 className='languages-project-modal' size={20} />
                                    <TbBrandCss3 className='languages-project-modal' size={20} />  
                                    <IoLogoJavascript className='languages-project-modal' size={20} />                                                                                    
                                    <DiPhotoshop className='languages-project-modal' size={20} />  
                                    <IoLogoFigma className='languages-project-modal' size={20} />  
                                </div>
                                <div className='container-btn-modal'>
                                    <a href="https://agua-na-boca.vercel.app/" rel="noreferrer" target="_blank"><button className='main-btn'>Link do projeto</button></a>
                                    <a href="https://github.com/ibrunoc/Agua-Na-Boca" rel="noreferrer" target="_blank"><button className='main-btn'>Link do repositório</button></a>
                                </div>
                            </div>                                    
                        </div>                                 
                    </div>                                    
                </Modal>                                  
                    
                <Modal className="modal" isOpen={modalIsOpenPla} style={customStyles} onRequestClose={closeModalPla}>
                    <button className='close' onClick={closeModalPla}><AiOutlineClose className='x' /></button>
                    <div className="project-image-modal">
                        <div className='information-modal'>
                            <a href="https://place-up.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Placeup} alt="PlaceUP" /></a>                                         
                            <div>
                                <a href="https://place-up.vercel.app/" rel="noreferrer" target="_blank"><h2>PlaceUP</h2></a>
                                <p>Desenvolvimento Web</p>
                                <p className='description-modal'>Meu TCC feito no PROA, a PlaceUP  uma plataforma online que auxilia o comerciamente a precificar e expor seus produtos, e disponibiliza uma vitrine online para que os clientes possam reservar seus produtos favoritos sem sair de casa!</p>                                        
                                <h3 className='date-project-modal'>30 de Junho de 2022</h3>
                                <div className='langueges-modal'>
                                    <h1>Linguagens utilizadas para criação: </h1>
                                    <SiReact className='languages-project-modal' size={20} />
                                    <SiStyledcomponents className='languages-project-modal' size={20} />  
                                    <IoLogoJavascript className='languages-project-modal' size={20} />     
                                    <FaJava className='languages-project-modal' size={20} />             
                                    <GrMysql className='languages-project-modal' size={20} />                                                                   
                                    <DiPhotoshop className='languages-project-modal' size={20} />  
                                    <SiAdobeillustrator className='languages-project-modal' size={20} /> 
                                    <IoLogoFigma className='languages-project-modal' size={20} /> 
                                    <FaGitAlt className='languages-project-modal' size={20} /> 
                                </div>
                                <div className='container-btn-modal'>
                                    <a href="https://place-up.vercel.app/" rel="noreferrer" target="_blank"><button className='main-btn'>Link do projeto</button></a>
                                    <a href="https://github.com/ibrunoc/PlaceUP" rel="noreferrer" target="_blank"><button className='main-btn'>Link do repositório</button></a>
                                </div>                       
                            </div>                                    
                        </div>                                  
                    </div>                                    
                </Modal>              

                <Modal className="modal" isOpen={modalIsOpenIns} style={customStyles} onRequestClose={closeModalIns}>
                    <button className='close' onClick={closeModalIns}><AiOutlineClose className='x' /></button>
                    <div className="project-image-modal">
                        <div className='information-modal'>
                            <a href="https://clone-instagram-bc.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Instagram} alt="Instagram" /></a>                                         
                            
                            <div>
                                <a href="https://clone-instagram-bc.vercel.app/" rel="noreferrer" target="_blank"><h2>Clone do Instagram</h2></a>
                                <p>Desenvolvimento Web</p>
                                <p className='description-modal'>Este foi o um desafio no curso do Proa a criar um clone do Instagram de Abril de 2022.</p>                                        
                                <h3 className='date-project-modal'>29 de Abril de 2022</h3>
                                <div className='langueges-modal'>
                                <h1>Linguagens utilizadas para criação: </h1>
                                    <SiReact className='languages-project-modal' size={20} />
                                    <TbBrandCss3 className='languages-project-modal' size={20} />  
                                    <IoLogoJavascript className='languages-project-modal' size={20} />  
                                    <FaGitAlt className='languages-project-modal' size={20} /> 
                                </div>
                                <div className='container-btn-modal'>
                                    <a href="https://clone-instagram-bc.vercel.app/" rel="noreferrer" target="_blank"><button className='main-btn'>Link do projeto</button></a>
                                    <a href="https://github.com/ibrunoc/Clone_Instagram" rel="noreferrer" target="_blank"><button className='main-btn'>Link do repositório</button></a>
                                </div>
                            </div>                                    
                        </div>                            
                    </div>                                    
                </Modal>                                  
                    
                <Modal className="modal" isOpen={modalIsOpenTdl} style={customStyles} onRequestClose={closeModalTdl}>
                    <button className='close' onClick={closeModalTdl}><AiOutlineClose className='x' /></button>
                    <div className="project-image-modal">
                        <div className='information-modal'>
                            <a href="https://to-do-list-seven-mu.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Todolist} alt="ToDoList" /></a>                                         
                            <div>
                                <a href="https://to-do-list-seven-mu.vercel.app/" rel="noreferrer" target="_blank"><h2>ToDo List</h2></a>
                                <p>Desenvolvimento Web</p>
                                <p className='description-modal'>Esse é um ToDoList simples que eu criei apenas para treinar.</p>                                        
                                <h3 className='date-project-modal'>21 de Julho de 2022</h3>
                                <div className='langueges-modal'>
                                    <h1>Linguagens utilizadas para criação: </h1>
                                    <AiOutlineHtml5 className='languages-project-modal' size={20} />
                                    <TbBrandCss3 className='languages-project-modal' size={20} />  
                                    <IoLogoJavascript className='languages-project-modal' size={20} />    
                                    <FaGitAlt className='languages-project-modal' size={20} />  
                                </div>
                                <div className='container-btn-modal'>
                                    <a href="https://to-do-list-seven-mu.vercel.app/" rel="noreferrer" target="_blank"><button className='main-btn'>Link do projeto</button></a>
                                    <a href="https://github.com/ibrunoc/ToDoList" rel="noreferrer" target="_blank"><button className='main-btn'>Link do repositório</button></a>
                                </div>      
                            </div>                                    
                        </div>                                  
                    </div>                                    
                </Modal>  

                <Modal className="modal" isOpen={modalIsOpenPok} style={customStyles} onRequestClose={closeModalPok}>
                    <button className='close' onClick={closeModalPok}><AiOutlineClose className='x' /></button>
                    <div className="project-image-modal">
                        <div className='information-modal'>
                            <a href="https://pokedex-ihyperbr.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Pokedex} alt="Pokédex" /></a>                                         
                            <div>
                                <a href="https://pokedex-ihyperbr.vercel.app/" rel="noreferrer" target="_blank"><h2>Pokédex</h2></a>
                                <p>Desenvolvimento Web</p>
                                <p className='description-modal'>Esse é um projeto simples, onde eu criei uma pokedex com base no vídeo do Manual do Dev.</p>                                        
                                <h3 className='date-project-modal'>4 de Agosto de 2022</h3>
                                <div className='langueges-modal'>
                                    <h1>Linguagens utilizadas para criação: </h1>
                                    <AiOutlineHtml5 className='languages-project-modal' size={20} />
                                    <TbBrandCss3 className='languages-project-modal' size={20} />  
                                    <IoLogoJavascript className='languages-project-modal' size={20} />    
                                    <FaGitAlt className='languages-project-modal' size={20} />  
                                </div>
                                <div className='container-btn-modal'>
                                    <a href="https://pokedex-ihyperbr.vercel.app/" rel="noreferrer" target="_blank"><button className='main-btn'>Link do projeto</button></a>
                                    <a href="https://github.com/ibrunoc/Pokedex" rel="noreferrer" target="_blank"><button className='main-btn'>Link do repositório</button></a>
                                </div>
                            </div>                                    
                        </div>                                 
                    </div>                                    
                </Modal>                                  
                    
                <Modal className="modal" isOpen={modalIsOpenBli} style={customStyles} onRequestClose={closeModalBli}>
                    <button className='close' onClick={closeModalBli}><AiOutlineClose className='x' /></button>
                    <div className="project-image-modal">
                        <div className='information-modal'>
                            <a href="https://blind-vision.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Blind} alt="Blind Vision" /></a>                                         
                            <div>
                                <a href="https://blind-vision.vercel.app/" rel="noreferrer" target="_blank"><h2>Blind Vision</h2></a>
                                <p>Desenvolvimento Web</p>
                                <p className='description-modal'>Esse foi um desafio feito no Proa onde era apenas criar uma ideia, e um site básico. A ideia seria um óculos para cego, onde o óculos teria um chip que analisaria ao redor do cego em torno de 5m, e criando uma imagem na cabeça dele sobre o lugar que ele está.</p>                                        
                                <h3 className='date-project-modal'>5 de Junho de 2022</h3>
                                <div className='langueges-modal'>
                                    <h1>Linguagens utilizadas para criação: </h1>
                                    <SiReact className='languages-project-modal' size={20} />
                                    <SiStyledcomponents className='languages-project-modal' size={20} />  
                                    <IoLogoJavascript className='languages-project-modal' size={20} />  
                                    <IoLogoFigma className='languages-project-modal' size={20} /> 
                                    <FaGitAlt className='languages-project-modal' size={20} /> 
                                </div>
                                <div className='container-btn-modal'>
                                    <a href="https://blind-vision.vercel.app/" rel="noreferrer" target="_blank"><button className='main-btn'>Link do projeto</button></a>
                                    <a href="https://github.com/ibrunoc/blindVision" rel="noreferrer" target="_blank"><button className='main-btn'>Link do repositório</button></a>
                                </div>           
                            </div>                                    
                        </div>                                 
                    </div>                                    
                </Modal>                                   
                    
                <Modal className="modal" isOpen={modalIsOpenEco} style={customStyles} onRequestClose={closeModalEco}>
                    <button className='close' onClick={closeModalEco}><AiOutlineClose className='x' /></button>
                    <div className="project-image-modal">
                        <div className='information-modal'>
                            <a href="https://caoselheiro-ecoverse.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Caoselheiro} alt="Econverse Caoselheiro" /></a>                                         
                            <div>
                                <a href="https://caoselheiro-ecoverse.vercel.app/" rel="noreferrer" target="_blank"><h2>Econverse Caoselheiro </h2></a>
                                <p>Desenvolvimento Web</p>
                                <p className='description-modal'>Esse foi um desafio de um processo seletivo.</p>                                        
                                <h3 className='date-project-modal'>22 de Novembro de 2022</h3>
                                <div className='langueges-modal'>
                                    <h1>Linguagens utilizadas para criação: </h1>
                                    <SiReact className='languages-project-modal' size={20} />
                                    <SiStyledcomponents className='languages-project-modal' size={20} />  
                                    <IoLogoJavascript className='languages-project-modal' size={20} />                                                                
                                    <DiPhotoshop className='languages-project-modal' size={20} />  
                                    <IoLogoFigma className='languages-project-modal' size={20} /> 
                                    <FaGitAlt className='languages-project-modal' size={20} /> 
                                </div>
                                <div className='container-btn-modal'>
                                    <a href="https://caoselheiro-ecoverse.vercel.app/" rel="noreferrer" target="_blank"><button className='main-btn'>Link do projeto</button></a>
                                    <a href="https://github.com/ibrunoc/ecoverse-caoselheiro" rel="noreferrer" target="_blank"><button className='main-btn'>Link do repositório</button></a>
                                </div>               
                            </div>                                    
                        </div>                                    
                    </div>                                    
                </Modal> 
            </section>            
        </>
    );
}