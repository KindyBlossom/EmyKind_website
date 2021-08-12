import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo,MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';


const Navbar = ({toggle}) => {
    

    
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="Emy">EmyKind</NavLogo>
                <MobileIcon onClick = {toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="loveToast"
                        smooth = {true}
                        duration = {500}
                        spy = {true}
                        exact = 'true'
                        >Love Toast</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="countdown"
                        smooth = {true}
                        duration = {500}
                        spy = {true}
                        exact = 'true'
                        offset = {-60}
                        >CountDown</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="gallery">Our Gallery</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="invite">Address</NavLinks>
                    </NavItem>
                    
                </NavMenu>
            </NavbarContainer>
        </Nav>

        </>
    );
};

export default Navbar;
