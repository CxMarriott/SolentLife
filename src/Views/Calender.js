
import React from 'react'

import styled from "styled-components";
import avatarPlaceholder from "../assets/avatar_placeholder.png";
import solent from "../assets/solent.png";


const Date = styled.div`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 40px;
margin: auto;
padding:10px;
text-align: center;
   background: linear-gradient(360deg, #E5E5E5 0%, #FFFFFF 100%), #33363D;
   width: 325px;
   margin-bottom: 10px;
   margin-top: 10px;
   min-height: 25px;
   padding %;
   h6:nth-child(2) {
       margin-top: 5%
   }, 
  `;
  const StyledDivider = styled.hr`
  width:100px;
  color: black;
`;
  
  const DateArea = styled.div`
  text-align:center;

},
`;

const Wrapper = styled.div`
 
 
solent{
  opacity: 0.5;
}
},
`;

const Save = styled.div`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 40px;
text-align:center;
justify-content:flex;
   background: linear-gradient(180deg, #DFDFDF -102.63%, rgba(255, 255, 255, 0) 150%), #474747;
   width:30%;
   margin-bottom: 2%;
   margin-top: 2%;
   min-height: 25px;
   padding 2%;
   margin-left:33%;
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
      
<Header>Calender</Header>
<br/>
      <DateArea>21/4/20</DateArea> 
      
        <Date>
            15:00 - 16:00 - Web Dev For Industry
        </Date>
        <DateArea>25/4/20</DateArea> 
        <Date>
        15:00 - 16:00 - Web Dev For Industry
        </Date>


        
      <DateArea>29/4/20</DateArea> 
      
      <Date>
          15:00 - 16:00 - Web Dev For Industry
      </Date>
      <DateArea>3/5/20</DateArea> 
      <Date>
      15:00 - 16:00 - Web Dev For Industry
      </Date>

      <DateArea>10/5/20</DateArea> 
      
      <Date>
          15:00 - 16:00 - Web Dev For Industry
      </Date>
      <DateArea>15/5/20</DateArea> 
      <Date>
      15:00 - 16:00 - Web Dev For Industry
      </Date>
      <Date>
      15:00 - 16:00 - Web Dev For Industry
      </Date>
      <Date>
      15:00 - 16:00 - Web Dev For Industry
      </Date>
      <Date>
      15:00 - 16:00 - Web Dev For Industry
      </Date>

      <DateArea>20/5/20</DateArea> 
      
      <Date>
          15:00 - 16:00 - Web Dev For Industry
      </Date>
      <DateArea>24/5/20</DateArea> 
      <Date>
      15:00 - 16:00 - Web Dev For Industry
      </Date>

      <DateArea>26/5/20</DateArea> 
      
      <Date>
          15:00 - 16:00 - Web Dev For Industry
      </Date>
      <DateArea>29/5/20</DateArea> 
      <Date>
      15:00 - 16:00 - Web Dev For Industry
      </Date>

      <DateArea>30/5/20</DateArea> 
      
      <Date>
          15:00 - 16:00 - Web Dev For Industry
      </Date>
     

        
     
        </Wrapper>
    )
}


export default Profile
