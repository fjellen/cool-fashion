import styled from "styled-components";

type cardProps = {
  imgUrl: string;
  title?: string;
  description: string;
};

const Title = styled.p``;

const Description = styled.p`
  display: flex;
  flex: 1;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ItemContainer = styled.div`
  text-align: left;
`;

const Image = styled.img``;

const Card = (props: cardProps) => {
  return (
    <>
      <FlexContainer>
        <ItemContainer>
          <Image src={props.imgUrl} />
          <Title>{props.title}</Title>
          <div style={{ display: "flex" }}>
            <Description>{props.description}</Description>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <svg
                style={{
                  height: "32px",
                  width: "29px",
                  bottom: "1.5rem",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
              </svg>
            </div>
          </div>
        </ItemContainer>
      </FlexContainer>
    </>
  );
};

export default Card;
