import styled from "styled-components";
import CardPhoto from "../CardPhoto/index.js";
import Canvas from "../Canvas";
import TicketUse from "../TicketUse/index.js";
import CardInfo from "../CardInfo/index.js";
import Image from "next/image";
import TortugaLogo from "../../public/TortugaLogo.png";
import CardInfoGold from "../CardInfoGold/index.js";
import tortugaLogoDorado from "../../public/tortugaLogoDorado.png";
import { useEffect } from "react";

export default function Card({
  what,
  why,
  price,
  id,
  onDeleteCard,
  birthday,
  divisor,
  image,
  handleFillCanvas,
  pixels,
  nextSav,
  frequencyDays,
  numIterations,
  x,
  startDate,
  handleShowInfo,
  showInfo,
  savings,
  howMuch,
  s,
  needed,
  totalTickets,
  usedTickets,
  frequencyName,
  savPeriod,
  handleImageWishUpload,
  imageWish,
  isUploaded2,
  showPopUp,
  handlePopUp,
  showedGoldPopUp,
  showPopUp2,
  showedPlatinumPopUp,
}) {
  useEffect(() => {
    handlePopUp(id, savings, price);
  }, [showPopUp, showedGoldPopUp, savings, showedPlatinumPopUp, isUploaded2]);

  return (
    <>
      {showPopUp && showedGoldPopUp && (
        <PopUp>You have earned a Golden Card!</PopUp>
      )}
      {isUploaded2 && showPopUp2 && (
        <PopUp>
          <p>Your card has achieved the highest level Platinum!</p>
        </PopUp>
      )}
      <StyledCard gold={savings < price} platinum={isUploaded2}>
        {showInfo ? (
          <>
            <CardPhoto what={what} image={image}></CardPhoto>
            <Canvas
              birthday={birthday}
              id={id}
              divisor={divisor}
              handleFillCanvas={handleFillCanvas}
              pixels={pixels}
            />
            {savings < price ? null : (
              <Image
                src={isUploaded2 ? TortugaLogo : tortugaLogoDorado}
                alt="Tortuga Logo"
                width={97}
                height={109}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "60px",
                }}
              />
            )}
          </>
        ) : (
          <>
            <CardInfo
              what={what}
              why={why}
              price={price}
              nextSav={nextSav}
              numnumIterations={numIterations}
              savings={savings}
              howMuch={howMuch}
              needed={needed}
              onDeleteCard={onDeleteCard}
              id={id}
            />

            <CardInfoGold
              what={what}
              why={why}
              price={price}
              nextSav={nextSav}
              numnumIterations={numIterations}
              savings={savings}
              howMuch={howMuch}
              needed={needed}
              onDeleteCard={onDeleteCard}
              id={id}
              birthday={birthday}
              totalTickets={totalTickets}
              usedTickets={usedTickets}
              frequencyName={frequencyName}
              savPeriod={savPeriod}
              handleImageWishUpload={handleImageWishUpload}
              image={image}
              imageWish={imageWish}
              isUploaded2={isUploaded2}
            />
          </>
        )}

        <InfoButton
          onClick={() => handleShowInfo(id, showInfo)}
          gold={savings < price}
        >
          i
        </InfoButton>
        <TicketUse id={id} savings={savings} price={price}></TicketUse>

        <GenerateButton
          gold={savings < price}
          onClick={() => {
            handleFillCanvas(
              divisor,
              pixels,
              id,
              frequencyDays,
              x,
              startDate,
              savings,
              s,
              howMuch,
              needed,
              price,
              totalTickets,
              isUploaded2
            );
            handlePopUp(id, savings, price);
          }}
        >
          €
        </GenerateButton>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.div`
  box-sizing: border-box;
  text-align: center;

  background: ${(props) =>
    props.gold
      ? " #faf1da"
      : "linear-gradient(56deg, rgba(131,101,30,1) 0%, rgba(186,150,38,1) 12%, rgba(216,183,64,1) 24%, rgba(231,201,78,1) 37%, rgba(239,211,86,1) 44%, rgba(246,232,94,1) 54%, rgba(238,182,11,1) 86%, rgba(219,165,19,1) 91%, rgba(198,147,32,1) 96%, rgba(184,134,41,1) 100%)"};

  background: ${(props) =>
    props.platinum
      ? "linear-gradient(56deg, rgba(155,155,155,1) 0%, rgba(130,130,130,1) 19%, rgba(174,174,174,1) 37%, rgba(233,233,233,1) 53%, rgba(204,204,204,1) 71%, rgba(157,157,157,1) 83%, rgba(123,123,123,1) 99%, rgba(155,155,155,1) 100%);"
      : null};

  border: 1px solid #eaeaea;
  box-shadow: 10px 11px 14px 3px rgba(0, 0, 0, 0.89);
  border-radius: 12px;
  width: 340px;
  height: 184px;
  margin: 16px auto;
  position: relative;
  display: block;
  line-height: 35px;
`;

const GenerateButton = styled.button`
  margin: 16px;
  position: absolute;
  background: #038a7f;
  color: #faf1da;
  bottom: 0px;
  right: -10px;
  border-radius: 50%;
  visibility: ${(props) => (props.gold ? "visible" : "hidden")};
`;

const InfoButton = styled.button`
  position: absolute;
  top: 10px;
  right: 8px;
  border-radius: 50%;
`;
const PopUp = styled.div`
  border: 1px solid grey;
  position: absolute;
  background: rgba(255, 253, 245);
  top: 200px;
  z-index: 80;
  border-radius: 10px;
  font-size: 18px;
  width: 300px;
  height: 200px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px 5px #000000;
  margin-right: 20px;
  line-height: 30px;
  & > p {
    text-align: center;
  }
`;
