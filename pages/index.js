import styled from "styled-components";
import Card from "../components/Card/index";
import Image from "next/image";
import WelcomeTortuga1 from "../public/WelcomeTortuga1.png";
import About from "../components/About/index";

export default function Home({
  cards,
  onDeleteCard,
  handleFillCanvas,
  handleShowInfo,
  handleImageWishUpload,
  handlePopUp,
  showPopUp,
  showPopUp2,
}) {
  return (
    <main>
      <About></About>
      {cards.length === 0 ? (
        <StyledWelcome>
          <Image
            src={WelcomeTortuga1}
            alt="Tortuga Logo"
            width={150}
            height={150}
            style={{
              position: "relative",
              borderRadius: "10px",
            }}
          />
          <p>
            Welcome to Tortuga app! To get started, simply tap the button with
            the (+) sign in the navigation bar to create your very first card.
            You can come back here to see your cards.
          </p>
        </StyledWelcome>
      ) : null}
      <WrapperDiv>
        <CardList>
          {cards?.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              what={card.what}
              why={card.why}
              price={card.price}
              howMuch={card.howMuch}
              onDeleteCard={onDeleteCard}
              birthday={card.birthday}
              divisor={card.divisor}
              image={card.image?.src}
              pixels={card.pixels}
              handleFillCanvas={handleFillCanvas}
              nextSav={card.nextSav}
              frequencyDays={card.frequencyDays}
              startDate={card.startDate}
              numIterations={card.numIterations}
              x={card.x}
              handleShowInfo={handleShowInfo}
              showInfo={card.showInfo}
              savings={card.savings}
              s={card.s}
              needed={card.needed}
              totalTickets={card.totalTickets}
              usedTickets={card.usedTickets}
              frequencyName={card.frequencyName}
              savPeriod={card.savPeriod}
              imageWish={card.imageWish?.src}
              handleImageWishUpload={handleImageWishUpload}
              isUploaded2={card.isUploaded2}
              ticketValue={card.ticketValue}
              showPopUp={showPopUp}
              handlePopUp={handlePopUp}
              showedGoldPopUp={card.showedGoldPopUp}
              showPopUp2={showPopUp2}
              showedPlatinumPopUp={card.showedPlatinumPopUp}
            />
          ))}
        </CardList>
      </WrapperDiv>
    </main>
  );
}

const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  z-index: 2;
  position: relative;
  width: 340px;
  height: 340px;
  background: #faf1da;
  border: 1px solid #a6a6a6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  margin: 0 auto;
  margin-top: 130px;

  & > p {
    margin: 20px;
    text-align: justify;
  }
`;

const CardList = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* const WelcomeMessage = styled.div``; */
