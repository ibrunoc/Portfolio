import './Style/Header.modules.scss';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

import logo from "./Images/logo.webp"; 

import { Link } from "react-scroll";

export function HeaderCourse() {	
	
	const [isActive, setIsActive] = useState(false);
	  
	const handleClick = () => {
		setIsActive(!isActive);
	};

	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	
	const handleScroll = () => {
	setScroll(window.pageYOffset);
	};

	return (
		<>
			<header className={`navigation ${scroll < 10 ? "" : "sticky"}`}> 
				<section className='container-header'>
					<figure className='container-logo'>
						<NavLink to="/"><img alt='Logo' src={ logo } className={`logo ${scroll < 10 ? "" : "sticky"}`}></img></NavLink>
					</figure>

					<nav className="desktop">
						<ul>
							<li><Link activeClass="select" spy={true} to="Home"><NavLink to="/">Inicio</NavLink></Link></li>
							<li><Link activeClass="select" spy={true} to="Courses"><NavLink to="">Formação</NavLink></Link></li>
							<li><Link activeClass="select" spy={true} to="Contact"><NavLink to="">Contato</NavLink></Link></li>
						</ul>
					</nav>
				</section>	

				<section className="mobile">
					<nav className="navbar">
						<ul className={`nav-menu ${isActive ? "active" : "nav-menu"}`}>
							<figure className='container-logo-mobile'>
								<NavLink to="/"><img alt='Logo' src={ logo } className='logo-mobile'></img></NavLink>
							</figure>
							<li className="nav-item">
								<Link activeClass="select-mobile" spy={true} to="Home"><NavLink to="/">Inicio</NavLink></Link>
							</li>
							<li className="nav-item">
								<Link activeClass="select-mobile" spy={true} to="Courses"><NavLink to="">Formação</NavLink></Link>
							</li>					
							<li className="nav-item">
								<Link activeClass="select-mobile" spy={true} to="Contact"><NavLink to="">Contato</NavLink></Link>
							</li>
						</ul>
					
						<button onClick={handleClick}>
							<article className={`hamburger ${isActive ? "active" : "hamburger"}`}>
								<span className="bar"></span>
								<span className="bar"></span>
							</article>     
						</button>                                       
					</nav>
				</section>	
			</header>
		</>
	);
}