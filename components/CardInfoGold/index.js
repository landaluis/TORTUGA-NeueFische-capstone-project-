import styled from "styled-components";
import DeleteButton from "../DeleteButton";
import { CldImage, CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
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
  /* const [imageWish, setImageWish] = useState({});

  console.log(cards);

  const handleImageWishUpload = (event) => {
    if (event.event === "success") {
      setImageWish({
        src: event.info.secure_url,
        height: event.info.height,
        width: event.info.width,
      });
      let updatedCards = [...cards];
      const index = updatedCards.findIndex((card) => card.id === cardId);
      updatedCards[index] = {
        ...updatedCards[index],
        imageWish: {
          src: imageWish.src,
          height: imageWish.height,
          width: imageWish.width,
        },
      };
      setCards(updatedCards);
    } else {
      //Upload war nicht erfolgreich
    }
  }; */

  return (
    <>
      {savings < price ? null : (
        <>
          {isUploaded2 ? (
            <ImagesContainer>
              <Image
                src={imageWish}
                alt={"My Wish come true"}
                width="80"
                height="80"
                style={{
                  position: "absolute",
                  top: "11px",
                  left: "10px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",

                  /*    borderRadius: "10px", */
                }}
              />
              <Image
                src={playaTortuga}
                alt={"My Wish come true"}
                width="80"
                height="80"
                style={{
                  position: "absolute",
                  top: "91px",
                  left: "10px",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  /* borderRadius: "10px", */
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

          <What>
            <strong>{what}</strong>{" "}
          </What>
          <Why>{why}</Why>
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
`;

const Why = styled.div`
  position: absolute;
  top: 15%;
  left: 35%;
  font-size: 14px;
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
  background: grey;
  top: 10%;
`;

const ImagesContainer = styled.div`
  border-radius: 10px;
`;
