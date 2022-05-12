import styled from "styled-components";



type cardProps = {
    imgUrl: string;
    title?: string;
    description: string;
  }
  
  const Title = styled.p`
 
  `

  const Description = styled.p`
 
  `


const Card = (props: cardProps) => {
    return(
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style={{textAlign: "left"}}>
            <img src={props.imgUrl} />
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </div>
        </div>
    )
}


export default Card;