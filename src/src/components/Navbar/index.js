import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements.js';

const Navbar = ({ toggle }) => {
    const[scrollNav,setScrollNav]=useState(false);
    const changeNav =()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[])
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
      <>
      <IconContext.Provider value={{color:'#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
        <NavLogo to='/'onClick={toggleHome}> gestion </NavLogo> 
        <MobileIcon onClick={toggle}>
            <FaBars/>
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to="propos" 
                smooth={true}
                 duration={500} 
                 spy={true} 
                 exact='true' 
                 offset={-80}
                >à propos de</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="Demande"
                 smooth={true}
                 duration={500} 
                 spy={true} 
                 exact='true' 
                 offset={-80}
                >demande</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="consult"
                 smooth={true}
                 duration={500} 
                 spy={true} 
                 exact='true' 
                 offset={-80}
                 >services</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="organigramme"
                 smooth={true}
                 duration={500} 
                 spy={true} 
                 exact='true' 
                 offset={-80}
                >organigramme</NavLinks>
            </NavItem>
            <NavBtn>
                <NavBtnLink to="/singin">Sign in</NavBtnLink>
            </NavBtn>
        </NavMenu>
        </NavbarContainer>  
      </Nav>
      </IconContext.Provider>
      </>
    )
};

export default Navbar
