import React from "react";
import Images from "./Images/Image.10jpg.jpg"
import styled from "styled-components";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const  ContactForm: React.FC = () => {
  const Container = styled.div`
    display:flex;
    
   width:80vw;
    height:35vw;
    align-items:center;
    margin-left:10rem;
    margin-right:10rem;
    margin-top:5rem;
    margin-bottom:10rem;
    background-color:#404040;
    color:white;
    border-radius: 20px;

  `;
   
  const LeftSide = styled.div`
    width:22rem;
    height:35vw;
    background-color:#404040;
    color:black;
    border-radius: 20px;
    justify-content:left;
 
  `;

  const RightSide = styled.div`
    font-family:monserat;
    
 h1{
   margin-bottom:4rem;
   margin-top:5rem;
   font-size:25px;
   margin-left:10rem;
 }
 
    h3{
    margin-top:rem;
    margin-left:13.5rem;
    font-size:14px;
    
  }

 h2{
  margin-left:15rem;
  margin-top:10rem;
  font-size:14px;
}

  h4{
    margin-left:0.1rem;
  }
    
  `;

  const MiddleSide = styled.div`
   font-size:10px;
   margin-top:4rem;
   font-family:montserrat;
   width:30vw;
   text-align:center;
   h1,{
     text-align:center;
   }
    border-right:1px solid white;
  `;

  const UserDetailsBox = styled.div`
  
   margin-left:4rem;
   display: flex;
   flex-wrap:wrap;
   width:10rem;
   font-size:13px;

  `;
  
  const Input = styled.input`
  color:white;
  font-size:1rem;
  border: none;
  outline:none;
  border-bottom: 1px solid white;
  border-color:white;
  background-color:#404040;
  margin-bottom:2rem;
  ::placeholder { 
   font-size:0.7rem;
    }

  `;
  
  const MessageInput = styled.input `
  color:white;
  margin-top:1rem;
  font-size:1.1rem;
  border: none;
  outline:none;
  
  width:26.5rem;
  border-bottom: 1px solid white;
  border-color:white;
  background-color:#404040;
    ::placeholder { 
      font-size:0.7rem;
    }
   `;

  return (
 <Container>
 
<LeftSide>

<img src={Images} style={{width: '25rem',height: '35vw',marginBottom:'10rem',borderRadius:'20px'}}></img>

</LeftSide>

<MiddleSide>
  

  

<h1>Frequently asked questions.</h1>
<br></br>

<h3>-Jag pushade till master är mitt liv över?</h3>

<h3>-Såsen smakade som mango,hur kommer</h3><h3>  det sig ?</h3>

<h3>-Min kebabpizza är var kall när den anlände,</h3> <h3>vad är problemet?</h3>

<h3>-Min kebabrulle är forfarande inte här, när</h3>  <h3>kan jag få den?</h3>

<h3>-Jag pushade till master är mitt liv över?</h3>

<h3>-Såsen smakade som mango,hur kommer</h3> <h3> det sig?</h3>

<h3>-Min kebabpizza är var kall när den anlände, </h3><h3>vad är problemet?</h3>

<h3>-Min kebabrulle är forfarande inte här, när</h3> <h3> kan jag få den?</h3>
<br></br>
<br></br>
<h2> Phone number</h2>
<h3>076-556-48-85</h3>
<h2>Email</h2>
<h3>coolfashion@gmail.com</h3>

</MiddleSide>

<RightSide>

<h1>Have any qouestions for us?</h1>

<UserDetailsBox>
  

<div  style={{display:"flex"}}>

<div>
<label htmlFor="first-name"  >First name</label>
<Input type="text" name='first-name' placeholder='Enter your first name'  ></Input>
</div>

<div style={{marginLeft:"2rem"}}>
<label htmlFor="last-name">Last name</label>
<Input type="text" name="last-name" placeholder="Enter your last name" ></Input>
</div>
</div>

<div style={{display:"flex"}}>
<div>
<label htmlFor="Email">Email</label>
<Input type="text" name="email" placeholder="Enter your email"></Input>
</div>

<div style={{marginLeft:"2rem",}}>
<label htmlFor="Phone number" >Phone number</label>
<Input type="text" name="phone-number" placeholder="Enter your phone number"></Input>
</div>
</div>
<div>
<label htmlFor="Message"  >Message</label>
<MessageInput type="text" name="message" placeholder="Enter your message"  ></MessageInput>

</div>

<h4>Send</h4>

<IoIosArrowDroprightCircle style={{marginLeft:"0.5rem",fontSize:"1.1rem",marginTop:"1rem"}}/>

</UserDetailsBox>
<h2>Privacy policy</h2>
             <h3>Terms and conditions</h3>     

               
                  

</RightSide>
  

 </Container>

  )
  }

  export default ContactForm;
