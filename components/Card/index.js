import styled from "styled-components";
import CardPhoto from "../CardPhoto/index.js";
import Canvas from "../Canvas";
import TicketUse from "../TicketUse/index.js";
import CardInfo from "../CardInfo/index.js";
import Image from "next/image";
import TortugaLogo from "../../lib/TortugaLogo.png";

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
  usedTickets,
}) {
  return (
    <>
      <StyledCard gold={savings < price}>
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
                src={TortugaLogo}
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
        )}

        <InfoButton onClick={() => handleShowInfo(id, showInfo)}>i</InfoButton>
        <TicketUse id={id} savings={savings} price={price}></TicketUse>

        <GenerateButton
          style={
            savings >= price
              ? { background: "red" }
              : { background: "greenyellow" }
          }
          onClick={() =>
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
              usedTickets
            )
          }
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
      ? "#eaeaea"
      : "linear-gradient(56deg, rgba(131,101,30,1) 0%, rgba(186,150,38,1) 12%, rgba(216,183,64,1) 24%, rgba(231,201,78,1) 37%, rgba(239,211,86,1) 44%, rgba(246,232,94,1) 54%, rgba(238,182,11,1) 86%, rgba(219,165,19,1) 91%, rgba(198,147,32,1) 96%, rgba(184,134,41,1) 100%)"};

  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
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
  bottom: 0px;
  right: -10px;
  border-radius: 50%;
`;

const InfoButton = styled.button`
  position: absolute;
  top: 10px;
  right: 8px;
  border-radius: 50%;
`;
