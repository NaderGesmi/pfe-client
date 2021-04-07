import React from 'react';
import {SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarRoute,
    SideBtnWrap,
    SidebarLink
} from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="propos" onClick={toggle}>
                    à propos de
                    </SidebarLink>
                    <SidebarLink to="demande" onClick={toggle}>
                    demande
                    </SidebarLink>
                    <SidebarLink to="consult"onClick={toggle} >
                        Services
                    </SidebarLink>
                    <SidebarLink to="organigramme"   onClick={toggle} >
                    organigramme                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/singin">
                        Sing In
                    </SidebarRoute>

                </SideBtnWrap>
            </SidebarWrapper>
            
        </SidebarContainer>
    );
};

export default Sidebar
