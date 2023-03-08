import './Style/Footer.modules.scss';

import { TfiEmail } from "react-icons/tfi"; 
import { BsInstagram, BsGithub, BsPhone, BsLinkedin, BsBehance } from "react-icons/bs"; 
import { SiLinktree } from "react-icons/si"; 

import { SlLocationPin } from "react-icons/sl"; 

export function Footer() { 
    return (
        <>                
            <footer className="contact-zone" data-aos="fade-up"> 
                <section className="container">
                    <article className="section-title">
                        <h2 className="title"><span>06.</span> Entre em contato</h2>
                        <hr />
                    </article> 

                    <article className="boxesInfo">
                        <aside className="boxContainer" data-aos="fade-up-right">
                            <div className="contact-box">
                                <div className="contact-info">
                                    <SlLocationPin className='Location' />                                      
                                    <h6 className="contact-title">Endereço</h6>
                                    <p>Jandira-SP, Brasil</p>
                                </div>
                            </div>
                        </aside>
                        <aside className="boxContainer" data-aos="fade-up">
                            <div className="contact-box">
                                <div className="contact-info">
                                    <BsPhone className='Phone' />
                                    <h6 className="contact-title">Telefone</h6>
                                    <p>+55 (11) 94388-4494</p>
                                </div>
                            </div>
                        </aside>
                        <aside className="boxContainer" data-aos="fade-up">
                            <div className="contact-box">
                                <div className="contact-info">
                                    <TfiEmail className='Email' />
                                    <h6 className="contact-title">E-mail</h6>
                                    <p>bruno.costa.c06@gmail.com</p>
                                </div>
                            </div>
                        </aside>
                    </article>
                </section>            
        
                <section id="footer" className="footer-zone" data-aos="zoom-in"> 
                    <article className="footer-widget">
                        <aside className="footer-content">
                            <p>Entre em contato <br/>
                            Estarei a disposição caso tenha alguma dúvida e deseje saber mais!</p>
                            <ul>
                                <li><a target="_blank" rel="noreferrer" href="https://github.com/ibrunoc/"><BsGithub className='github-footer'/></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/bruno.costa.c/"><BsInstagram className='instagram-footer' /></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brunocostac/"><BsLinkedin className='linkedin-footer' /></a></li> 
                                <li><a target="_blank" rel="noreferrer" href="https://www.behance.net/ibrunoc"><BsBehance className='behance-footer' /></a></li> 
                                <li><a target="_blank" rel="noreferrer" href="https://linktr.ee/bruno.costa.c"><SiLinktree className='linktree-footer' /></a></li>
                            </ul>
                        </aside>
                    </article>

                    <article className="footer-copyright">
                        <aside className="copyright-text text-center pt-20">
                            <p>Bruno C. Todos os direitos reservados || Copyright © 2023.</p>
                        </aside>
                    </article> 
                </section>                                
            </footer>   
        </>
    );
}
