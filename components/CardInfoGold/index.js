import styled from "styled-components";
import DeleteButton from "../DeleteButton";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

import playaTortuga from "../../public/playaTortuga.png";

export default function CardInfoGold({
  what,
  why,
  price,
  savings,
  id,
  onDeleteCard,
  birthday,
  totalTickets,
  usedTickets,
  frequencyName,
  savPeriod,
  imageWish,
  handleImageWishUpload,
  isUploaded2,
}) {
  return (
    <>
      {savings < price ? null : (
        <>
          {isUploaded2 ? (
            <ImagesContainer>
              <Image
                src={imageWish}
                alt={"My Wish come true"}
                width="94"
                height="85"
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "16px",
                  borderRadius: "10px",

                  zIndex: 1,
                }}
              />
              <Image
                src={playaTortuga}
                alt={"My Wish come true"}
                width="335"
                height="180"
                priority
                style={{
                  position: "absolute",
                  top: "1.5px",
                  left: "1.5px",
                  borderRadius: "17px",
                }}
              />
            </ImagesContainer>
          ) : (
            <PhotoContainer>
              <div>Take a picture of it</div>
              <CldUploadButton
                uploadPreset="ceduvcvz"
                onUpload={(event) => handleImageWishUpload(event, id)}
              />
              {imageWish && (
                <Image src={imageWish.src} width={10} height={10} alt="" />
              )}
            </PhotoContainer>
          )}

          <What isUploaded2={isUploaded2}>
            <strong>{what}</strong>{" "}
          </What>
          <Why isUploaded2={isUploaded2}>{why}</Why>
          <Price>
            <strong>Price : </strong>
            {price}€
          </Price>
          <SavingPeriod>
            <strong>Saving period : </strong>
            {savPeriod} {frequencyName}
          </SavingPeriod>

          <Birthday>
            <strong>Birthday :</strong> {birthday}
          </Birthday>
          <Tickets>
            <strong>Tickets</strong>({usedTickets}): {totalTickets}€
          </Tickets>
          <DeleteContainer>
            <DeleteButton onDeleteCard={onDeleteCard} id={id}></DeleteButton>
          </DeleteContainer>
        </>
      )}
    </>
  );
}

const What = styled.div`
  position: absolute;
  top: 5%;
  left: 35%;
  color: ${(props) => (props.isUploaded2 ? " #faf1da" : "black")};
`;

const Why = styled.div`
  position: absolute;
  top: 15%;
  left: 35%;
  font-size: 14px;
  color: ${(props) => (props.isUploaded2 ? "#D0CBD5" : "black")};
`;

const Birthday = styled.div`
  position: absolute;
  top: 35%;
  font-size: 15px;
  left: 35%;
`;

const Price = styled.div`
  position: absolute;
  display: inline;
  top: 48%;
  left: 35%;
  font-size: 15px;
`;

const SavingPeriod = styled.div`
  margin: 16px;
  position: absolute;
  top: 52%;
  left: 30%;
  font-size: 15px;
`;

const Tickets = styled.div`
  margin: 16px;
  position: absolute;
  text-align: center;
  top: 65%;
  left: 30%;
  font-size: 15px;
`;

const DeleteContainer = styled.div`
  position: absolute;
  border-radius: 4px;
  z-index: 2;
  right: 5%;
  bottom: 5%;
  font-size: 15px;
`;

const PhotoContainer = styled.div`
  width: 90px;
  height: 100px;
  border: 1px solid grey;
  border-radius: 10px;
  left: 5%;
  position: absolute;
  background: #021e38;
  color: #faf1da;
  top: 10%;
`;

const ImagesContainer = styled.div`
  border-radius: 10px;
`;
