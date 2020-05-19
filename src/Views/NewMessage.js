
import React from 'react'

import styled from "styled-components";
import avatarPlaceholder from "../assets/arrows.svg";
import ReplyArrows from "../assets/multimedia.svg";
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
   min-height: 100px;
   padding %;
   h6:nth-child(2) {
       margin-top: 5%
   }, 
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

const NewWrapper = styled.div`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
margin:auto;
padding:10px;
text-align: center;
   background: linear-gradient(360deg, #E5E5E5 0%, #FFFFFF 100%), #33363D;
   width: 300px;
   margin-bottom: 10px;
   margin-top: 5px;
   min-height: 15px;
   padding %;
   h6:nth-child(2) {
       margin-top: 5%
},
`;

const Reply = styled.div`
color: white;
display: flex;
margin: 0px -5px;
padding:10px;
padding-right:  10px;
justify-content: space-evenly;
img {
  margin-top: 10%;
  margin-bottom: 2%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 2%
}
  `;
  const Return = styled.div`
color: white;
display: flex;
margin: 0px -5px;
padding:10px;
padding-right:  10px;
justify-content: space-evenly;
img {
  margin-top: 10%;
  margin-bottom: 2%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 2%
}
  `;

  
  const Bottom = styled.div`
  justify-content: space-evenly;
display: flex;
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

           
                   <NewWrapper>
mreid@solent.ac.uk

          </NewWrapper>
          <NewWrapper>
Future Web Dev

          </NewWrapper>
         

      
          
        <Message>
           Hi all, just to let you know that all future web development tutorials will be moved forwards by an hour to fit peoples schedules. 
           Other lessons will go ahead as planned. 
           Thanks for the understanding
<br/>
<br/>
           M Reid
          
        </Message>
        
        <Bottom><Reply><Link to ="/messages"><img src={avatarPlaceholder} alt="avatar" /></Link></Reply>
        <Return><img src={ReplyArrows} alt="avatar" /></Return>
      </Bottom>
        
  


        </Wrapper>
    )
}


export default Profile
