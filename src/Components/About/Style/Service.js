
import styled from 'styled-components';
import { animated } from 'react-spring';

const Responsive = {
    Phone: "@media(max-width: 568px)",
};

export const Container = styled(animated.div)`
    display: inline-block;
    height: 330px;
    background: var(--bgTwo-color);
    padding-top: 50px;
    margin: 20px;
    max-width: 250px;   
    flex-wrap: wrap;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s; 
    z-index: 0;
    position: relative;
    cursor: pointer;
    background: linear-gradient(var(--bg-color), var(--bgTwo-color)) padding-box,  var(--gradient) border-box;
    border-radius: 15px;
    border: 2px solid transparent;

    &:hover{
        -webkit-box-shadow: 0px 0px 21px 0px rgba(152, 152, 152, 0.23);
        -moz-box-shadow: 0px 0px 21px 0px rgba(152, 152, 152, 0.23);
        box-shadow: 0px 0px 21px 0px rgba(152, 152, 152, 0.23); 
    }

    ${Responsive.Phone}{
        width: 100%; 
        max-width: 250px;
        margin: 20px auto 0 auto;
        height: auto;
        padding-bottom: 50px;
    }
`;