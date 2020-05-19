import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";


const StyledNav = styled.nav`
  ul {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    z-index: auto;
    
justify-content: space-between;
  }
`;

const StyledLi = styled.li`
font-family: 'Sarabun', sans-serif;
  margin-bottom: 2%;
  font-size: 30px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, active }) =>
    active ? theme.colors.darkShade[25] : ""};
`;

const StyledClosedText = styled.p`
  text-align: right;
  padding-right: 3%;
  margin-bottom: 15%;
  font-size: 18px;
  cursor: pointer;
`;

function Menu(props) {
  const { onClick } = props;
  const location = useLocation();

  return (
    <div>
      
      <StyledNav>
        <ul>
          <StyledLi active={location.pathname === "/"}>
            {" "}
            <Link to="/"> Home </Link>{" "}
          </StyledLi>
          <StyledLi active={location.pathname === "/calender"}>
            {" "}
            <Link to="/calender"> Calender </Link>{" "}
          </StyledLi>
          <StyledLi active={location.pathname === "/messages"}>
            {" "}
            <Link to="/messages"> Messages </Link>{" "}
          </StyledLi>
          <StyledLi active={location.pathname === "/map"}>
            {" "}
            <Link to="/map"> Map</Link>{" "}
          </StyledLi>
          <StyledLi active={location.pathname === "/profile"}>
            {" "}
            <Link to="/profile"> Profile</Link>{" "}
          </StyledLi>
        </ul>
      </StyledNav>
    </div>
  );
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired
};


const StyledBurgerMenu = styled.div`
color: white;
width: 200px;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-right: 10px;
padding-left: 10px;
hr {
  margin: 4px 0 0 4px;
  width: 70%;
  border: 1px solid white;
}
`;

const StyledUserAvatar = styled.div`
color: white;
display: flex;
width: 100%;
align-items: center;
justify-content: flex-end;
padding-right: 50px;
padding-left:px;
img {
  margin-top: 8%;
  margin-bottom: 2%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 2%
}
`;

const StyledMenuWrapper = styled.div`
a:link{
color:white;
text-decoration: none;
} 
a:visited{
  color:white;
  text-decoration: none;
  } 
 border-radius: 30px 30px 0px 0px;
transition: all 0.5s ease-in-out;
transform: ${({ open }) => (open ? "scale(1, 1)" : "scale(0, 0)")};
transform: ${({ open }) => (open ? " translateY(-08%) scale(1, 1)" : " translateY(90%) scale(0, 0)")};

height: 60%;
width: 100%;
background: linear-gradient(180deg, #890204 0%, #C92E31 100%), #C92E31;
position: absolute;
z-index:7;

bottom:0;
left: 0;
`;

const StyledWrapper = styled.div`
width: 100%;
background: #C92E31;
opacity: 0.;
height: 50px;
display: flex;
justify-content: flex-end;
border-radius: 10px 10px 0px 0px;
position: fixed;
bottom:0;
z-index:8;
`;

const StyledText = styled.div`
color: white;
display: flex;
width: 90%;
align-items: center;
justify-content: flex-end;
padding-right: 10px;

img {
  margin-top: 8%;
  margin-bottom: 2%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 2%
`;

function Header(props) {
  const { onClick, open, user, signOut } = props;
 

  const handleClick = e => {
    e.preventDefault();
    onClick(e);
  };

  const handleSignOutClick = () => {
    signOut();

  }

  const Logo = styled.div`
  font-family: 'Sarabun', sans-serif;
  font-size: 30px;
  padding-left:65px;
  
  `;
  


  return (
    <div>


      <StyledMenuWrapper open={open}>
        <Menu onClick={handleClick} />
      </StyledMenuWrapper>

      <StyledWrapper>

        
        <StyledBurgerMenu onClick={handleClick}>
          <hr/>
          <hr/>
          <hr/>

        </StyledBurgerMenu>
        <StyledUserAvatar>
          {/* <FontAwesomeIcon style={{ fontSize: "16px" }} icon={faChevronDown} /> */}
          <Logo>SolentLife</Logo>
          </StyledUserAvatar>
          

          <StyledText><h6> <span style={{textDecoration: "underline", cursor:"pointer"}} onClick={handleSignOutClick}> (Logout) </span></h6></StyledText>
       
      </StyledWrapper>
    </div>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired, 
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired
  
};

export default Header;
