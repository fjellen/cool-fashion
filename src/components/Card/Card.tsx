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

  const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  `
  
  const ItemContainer = styled.div`
  text-align: left;

  `

  const Image = styled.img`
  `





const Card = (props: cardProps) => {
    return(
        <>
           
        <FlexContainer>
        <ItemContainer>
            <Image src={props.imgUrl} />
            <Title>{props.title}</Title>
            <svg style={{height: "32px", width: "29px", position: "absolute", right: "0", bottom: "1.5rem", marginRight: "2.5rem"}}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/></svg>
            <Description>{props.description}</Description>
            
        </ItemContainer>
       
        </FlexContainer>
     
        </>
    )
}


export default Card;