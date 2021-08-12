import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarMenu, SidebarLink, } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="loveToast" onClick={toggle}>Love Toast</SidebarLink>
                    <SidebarLink to="countdown" onClick={toggle}>CountDown</SidebarLink>
                    <SidebarLink to="gallery" onClick={toggle}>Our Gallery</SidebarLink>
                    <SidebarLink to="invite" onClick={toggle}>Address</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar;
