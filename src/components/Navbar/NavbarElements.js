import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`

height:60px;
display: flex;
justify-center: center;
align-items: center;
font-size: 1em;
position: scroll;
top: 0;
z-index: 100;

@media screen and (max-width: 960px){
    transition:0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 100;
width: 100%;
padding: 0 24px;
max-width: 1100px:

@media screen and (max-width: 416px){
   display: none; 
}
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
font-size: 3vw;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
font-family: 'Alex Brush', cursive;

&.active{
    color: #fff! important;
}

@media screen and (max-width: 533px){
    font-size: 6vw; 
    padding-top : 50px; 
     
    
}
@media screen and (max-width: 340px){
    font-size: 6vw;
    padding-top : 50px;    
}
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`;

export const NavMenu =styled.ul`
display: flex;
align-items: center ;
list-style: none;
text-align: center;
// margin-right: -22px;
margin-left: 22px;
font-family: 'Saira Condensed', sans-serif;
text-transform:Uppercase;
overflow: hidden;
font-size:20px;

 

@media screen and (max-width: 768px){
    display: none;
    
}
`;
export const NavItem = styled.li`
height: 80px;


@media screen and (max-width: 416px){
    // height: 20px;
    
    
}
`;
export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height:100%;
cursor: pointer;


&.active{
    border-bottom: 3px solid #01bf71;
}
&.hover{
    border-bottom: 3px solid #01bf71;
}

`;