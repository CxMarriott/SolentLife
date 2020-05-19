import React from 'react'

import styled from "styled-components";
import avatarPlaceholder from "../assets/social-media.svg";
import solent from "../assets/solent.png";

const Avatar = styled.div`
color: white;
display: flex;
margin: auto;
padding:10px;
justify-content: center;
padding-right:  5px;
img {
  margin-top: 10%;
  margin-bottom: 2%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 2%
}
`;

const Spaces = styled.div`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 40px;
text-align:center;
margin: auto;
padding:10px;
   background: linear-gradient(360deg, #E5E5E5 0%, #FFFFFF 100%), #33363D;
   width: 200px;
   margin-bottom: 1%;
   margin-top: 1%;
   min-height: 10px;
   padding %;
   h6:nth-child(2) {
       margin-top: 5%
   }, 
  `;

  const Name = styled.div`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 40px;
text-align:center;
margin: 0;
padding:10px;
   background: linear-gradient(360deg, #E5E5E5 0%, #FFFFFF 100%), #33363D;
   width: 150px;
   margin-bottom: 1%;
   margin-top: 1%;
   min-height: 10px;
   padding %;
   h6:nth-child(2) {
       margin-top: 5%
   }, 
  `;
  const StyledDivider = styled.hr`
  width:100px;
  color: black;
`;
  
  const NameArea = styled.div`
  text-align:center;

},
`;

const Wrapper = styled.div`
  Padding-top:%;
  
},
`;

const Save = styled.div`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 40px;
text-align:center;


margin: auto;
padding:10px;
   background: linear-gradient(180deg, #DFDFDF -102.63%, rgba(255, 255, 255, 0) 150%), #474747;
   width:200px;
   margin-bottom: 1%;
   margin-top: 1%;
   min-height: 25px;
   padding %;
   
   h6:nth-child(2) {
       margin-top: 5%
   }, 
  `;

const NameContainer = styled.div `
display: flex;
flex-direction: row;

  justify-content: center;
`;

const Header = styled.div`
  text-align:center;
  background: #c8c8c8;
  padding: 10px;
  font-size:  20px;
},
`;

function Profile(props) {
    return (
        <Wrapper>

          <Header>Profile</Header>
        <Avatar>
          <img src={avatarPlaceholder} alt="avatar" />
        </Avatar>

       <NameArea> Name
           
       </NameArea>

      <NameContainer>
        <Name>
            John
        </Name>
        <Name>
            Smith
        </Name>
        </NameContainer>
      <br/>
        <NameArea> Email</NameArea>
        <Spaces>
            johnsmith@gmail.com
        </Spaces>
        <br/>
        <NameArea> Password</NameArea>
        <Spaces>
            **********
        </Spaces>
        <br/>
        <Save>Save</Save>
     
    
        </Wrapper>
    )
}


export default Profile

