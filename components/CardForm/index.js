import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { CldImage, CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import Router from "next/router";
import { useEffect } from "react";

export default function CardForm({
  onAddCard,
  onHandleImageUpload,
  image,
  isUploaded,
}) {
  const [maxHowMuch, setMaxHowMuch] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formDataCard = new FormData(form);

    const data = Object.fromEntries(formDataCard);

    if (data.frequency == "0") {
      alert("Please select a frequency");
      return;
    }

    onAddCard(data);
    const clearLocalStorageKey = (image) => {
      localStorage.removeItem(image);
    };

    /*   window.location.reload(); */
    clearLocalStorageKey("image");

    setShowPopup(true);
    let timer;
    timer = setTimeout(() => {
      Router.push("/");
      /*       setShowPopup(false); */
    }, 2000);
    form.reset();
  }

  function handlePriceChange(event) {
    setMaxHowMuch(parseInt(event.target.value));
  }

  return (
    <>
      {showPopup ? (
        <PopUp>
          <p>Your card has been successfully created!</p>
        </PopUp>
      ) : null}
      <StyledForm onSubmit={handleSubmit}>
        <Title>
          <strong>New Tortuga Egg</strong>
        </Title>
        <section>
          <What>
            <input
              type="text"
              id="what"
              name="what"
              placeholder="Travel"
              aria-label="Wish"
              required
            />
            <label htmlFor="what">Wish </label>
          </What>
          <UploadPriceContainer>
            <Upload>
              <UploadCheckContainer>
                <CldUploadButton
                  uploadPreset="ceduvcvz"
                  id="upload-btn"
                  onUpload={onHandleImageUpload}
                  style={{
                    width: "60px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                {image && (
                  <Image src={image.src} width={100} height={100} alt="" />
                )}
                <Checked
                  style={
                    isUploaded
                      ? { background: "green" }
                      : { background: "#eaeaea", border: "1px solid grey" }
                  }
                ></Checked>
              </UploadCheckContainer>
              <Label htmlFor="upload-btn">Picture</Label>
            </Upload>
            <Price>
              <input
                style={{ width: "80px" }}
                type="number"
                id="price"
                name="price"
                min="1"
                placeholder="€"
                aria-label="Price"
                required
                onChange={handlePriceChange}
              />
              <label htmlFor="price">Price </label>
            </Price>
          </UploadPriceContainer>

          <Why>
            <input
              type="text"
              id="why"
              name="why"
              placeholder="I need to relax"
              aria-label="Why"
            />
            <label htmlFor="why">Why </label>
          </Why>

          <Subtitle>
            <strong>Hatching Plan</strong>
          </Subtitle>
          <HoWFrequencyContainer>
            <HowMuch>
              <input
                style={{ width: "80px" }}
                type="number"
                id="howMuch"
                name="howMuch"
                min="1"
                max={maxHowMuch}
                placeholder="€ "
                aria-label="HowMuch"
                required
              />
              <label htmlFor="howMuch">Amount </label>
            </HowMuch>
            <Frequency>
              <select name="frequency" required>
                <option value="0">-Choose Frequency-</option>
                <option value="1">Daily</option>
                <option value="2">Weekly</option>
                <option value="3">Monthly</option>
              </select>
              <label>Frequency </label>
            </Frequency>
          </HoWFrequencyContainer>
          <Reset type="reset">Reset</Reset>
          <Create type="submit">Create</Create>
        </section>
        <Exit>
          <Link href={"/"} style={{ color: "#faf1da" }}>
            <span className="material-symbols-outlined">
              disabled_by_default
            </span>
          </Link>
        </Exit>
      </StyledForm>
    </>
  );
}

const Exit = styled.div`
  z-index: 30;
  top: -10px;
  position: absolute;
  right: -10px;
  color: #faf1da;
`;

const StyledForm = styled.form`
  display: flex;
  position: relative;
  justify-content: center;
  top: 100px;
  display: block;
  width: 315px;
  height: 450px;
  text-align: center;
  border: 1px solid grey;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background: radial-gradient(
    at 35% 160px,
    rgba(223, 217, 219, 1) 0%,
    rgba(251, 250, 250, 1) 0%,
    rgba(247, 245, 246, 1) 12%,
    rgba(242, 237, 239, 1) 34%,
    rgba(208, 201, 204, 1) 53%,
    rgba(180, 173, 175, 1) 66%,
    rgba(116, 113, 114, 1) 78%,
    rgba(165, 156, 159, 1) 99%,
    rgba(171, 163, 165, 1) 100%,
    rgba(190, 179, 183, 1) 100%
  );

  box-shadow: inset 14px 26px 49px 0px rgba(255, 244, 222, 0.94),
    14px 26px 49px 0px rgba(0, 0, 0, 0.94);

  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
`;

const Reset = styled.button`
  position: relative;
  top: 75px;
  left: -20px;
  color: #1f2021;
  border-radius: 5px;
`;

const Create = styled.button`
  position: relative;
  top: 75px;
  right: -20px;
  color: #1f2021;
  border-radius: 5px;
`;

const Frequency = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 55px;
  right: 40px;
  width: 30%;
  color: #1f2021;
  font-size: 15px;
`;

const HowMuch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 55px;
  display: flex;
  left: 29px;
  width: 30%;
  font-size: 15px;
  color: #1f2021;
`;

const Why = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 60px;
  font-size: 15px;
  color: #1f2021;
`;

const What = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 25px;
  color: #1f2021;
  font-size: 15px;
`;

const Title = styled.h3`
  position: relative;
  top: 25px;
  color: #021e38;
`;

const UploadPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 40px;
  right: 40px;
  font-size: 15px;
`;
const Upload = styled.div`
  position: relative;
  top: 35px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`;

const Checked = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 5px;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const Subtitle = styled.h3`
  position: relative;
  top: 55px;
  color: #021e38;
`;

const HoWFrequencyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UploadCheckContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 5px;
`;

const Label = styled.label`
  position: relative;
  top: 9px;
  font-size: 15px;
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
