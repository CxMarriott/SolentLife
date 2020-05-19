
import React from 'react'

import styled from "styled-components";
import avatarPlaceholder from "../assets/avatar_placeholder.png";
import { Link } from "react-router-dom";



const Message = styled.div`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 40px;
margin: auto;
padding:10px;
text-align: center;
   background: linear-gradient(360deg, #E5E5E5 0%, #FFFFFF 100%), #33363D;
   width: 350px;
   margin-bottom: 10px;
   margin-top: 10px;
   min-height: 25px;
   padding %;
   h6:nth-child(2) {
       margin-top: 5%
   }, 

   a:link{
      text-decoration: none;
      } 
      a:visited{
         color:black;
         text-decoration: none;
         } 
  `;
  const StyledDivider = styled.hr`
  width:100px;
  color: black;
`;
  
  const MessageArea = styled.div`
  text-align:center;

},
`;

const Wrapper = styled.div`
  

},
`;

const SearchWrapper = styled.div`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
margin:auto;
padding:10px;
text-align: center;
   background: linear-gradient(360deg, #E5E5E5 0%, #FFFFFF 100%), #33363D;
   width: 300px;
   margin-bottom: 10px;
   margin-top: 10px;
   min-height: 15px;
   padding-left: 10px;
   h6:nth-child(2) {
       margin-top: 5%
},
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
<Header>Messages</Header>
          <SearchWrapper>
Search Messages

          </SearchWrapper>

      
          
        <Message>
           
          <Link to ="/newmessage">M Reid - Future Web Dev</Link>
        </Message>
        
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        <Message>
           M Reid - Future Web Dev
          
        </Message>
        


        
  


        </Wrapper>
    )
}


export default Profile
