import './Style/Error.modules.scss';
import { Link } from "react-router-dom";


import AOS from 'aos';
import 'aos/dist/aos.css'; 

import MouseParallax from '../../Common/Context/MouseParallax';

function Error() {
    return (
      <>
        <div>              
            <div>
              <section className="error-404">           
                <MouseParallax />
                <article className="container-erro"> 
                  <h2 className="text-404">404</h2>   
                    <div className='text-erro'>
                        <p>Ué? Parece que você se perdeu...</p>
                        <p>Volte para a página inicial!</p>
                        <button><Link to="/">Inicio</Link></button>
                    </div>
                </article>
              </section>	           
            </div>   
        </div>         
      </>	    
    );
}

export default Error;

AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99,   

  offset: 120, 
  delay: 0, 
  duration: 1000, 
  easing: 'ease', 
  once: true, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 
});