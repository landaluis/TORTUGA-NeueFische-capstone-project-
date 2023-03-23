import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { CldImage, CldUploadButton } from "next-cloudinary";
import Image from "next/image";

export default function CardForm({
  onAddCard,
  onHandleImageUpload,
  image,
  isUploaded,
}) {
  const [maxHowMuch, setMaxHowMuch] = useState(1);

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
    form.reset();
  }

  function handlePriceChange(event) {
    setMaxHowMuch(parseInt(event.target.value));
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Title>New Card</Title>
        <section>
          <What>
            <label htmlFor="what">What: </label>
            <input
              type="text"
              id="what"
              name="what"
              placeholder="New videogame, Travel vacations, etc"
              required
            />
          </What>

          <Upload>
            <CldUploadButton
              uploadPreset="ceduvcvz"
              onUpload={onHandleImageUpload}
            />
            {image && <Image src={image.src} width={100} height={100} alt="" />}
            <Checked
              style={
                isUploaded
                  ? { background: "green" }
                  : { background: "#eaeaea", border: "1px solid grey" }
              }
            ></Checked>
          </Upload>

          <Why>
            <label htmlFor="why">Why: </label>
            <input
              type="text"
              id="why"
              name="why"
              placeholder="x-mas present"
            />
          </Why>
          <Price>
            <label htmlFor="price">Price: </label>
            <input
              type="number"
              id="price"
              name="price"
              min="1"
              required
              onChange={handlePriceChange}
            />
          </Price>

          <HowMuch>
            <label htmlFor="howMuch">How much: </label>
            <input
              type="number"
              id="howMuch"
              name="howMuch"
              min="1"
              max={maxHowMuch}
              required
            />
          </HowMuch>
          <Frequency>
            <label>How often: </label>
            <select name="frequency" required>
              <option value="0">-Choose Frequency-</option>
              <option value="1">Daily</option>
              <option value="2">Weekly</option>
              <option value="3">Monthly</option>
            </select>
          </Frequency>
          <Reset type="reset">Reset</Reset>
          <Create type="submit">Create</Create>
        </section>
        <Exit>
          <Link href={"/"}>
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
  top: -20px;
  position: absolute;
  right: -30px;
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

  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow: 4px 4px 24px 1px rgba(0, 0, 0, 0.79);
`;

const Reset = styled.button`
  position: relative;
  top: 160px;
  left: -20px;
`;

const Create = styled.button`
  position: relative;
  top: 160px;
  right: -20px;
`;

const Frequency = styled.div`
  position: relative;
  top: 120px;
`;

const HowMuch = styled.div`
  position: relative;
  top: 100px;
`;

const Price = styled.div`
  position: relative;
  top: 80px;
`;

const Why = styled.div`
  position: relative;
  top: 55px;
`;

const What = styled.div`
  position: relative;
  top: 30px;
`;

const Title = styled.h4`
  position: relative;
  top: 25px;
`;

const Upload = styled.div`
  position: relative;
  top: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Checked = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 5px;
`;
