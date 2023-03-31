import styled from "styled-components";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import CounterCards from "../CounterCards";
import { useState } from "react";
import TortugaLogo from "../../public/TortugaLogo.png";

export default function ProfileForm({ cards }) {
  const [imageProfile, setImageProfile] = useLocalStorageState("imageProfile", {
    defaultValue: {},
  });
  const [showProfile, setShowProfile] = useLocalStorageState("showProfile", {
    defaultValue: false,
  });
  const [name, setName] = useLocalStorageState("name", { defaultValue: "" });
  const [showPopUp, setShowPopUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowProfile(true);

    setShowPopUp(true);

    let timer;

    timer = setTimeout(() => {
      setShowPopUp(false);
    }, 2000);
  };

  const handleReset = () => {
    setName("");
    setShowProfile(false);
  };

  const handleImageProfileUpload = (event) => {
    if (event.event === "success") {
      setImageProfile({
        src: event.info.secure_url,
        height: event.info.height,
        width: event.info.width,
      });
    } else {
      //Upload war nicht erfolgreich
    }
  };

  return (
    <>
      {showPopUp ? <PopUp>Profile Created!</PopUp> : null}
      {!showProfile && (
        <StyledForm onSubmit={handleSubmit}>
          <Title>New User</Title>
          <section>
            <NameInput>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </NameInput>

            <Upload>
              {imageProfile && (
                <Image
                  src={imageProfile.src || TortugaLogo}
                  width={100}
                  height={100}
                  alt="Image Profile"
                />
              )}
              <CldUploadButton
                uploadPreset="ceduvcvz"
                onUpload={handleImageProfileUpload}
              />
            </Upload>

            <Reset type="reset" onClick={handleReset}>
              Reset
            </Reset>
            <Create type="submit">Submit</Create>
          </section>
          <Exit>
            <Link href={"/"}>
              <span className="material-symbols-outlined">
                disabled_by_default
              </span>
            </Link>
          </Exit>
        </StyledForm>
      )}
      {showProfile && (
        <StyledCard>
          <Name>
            <strong>{name}</strong>{" "}
          </Name>

          <Image
            src={imageProfile.src || TortugaLogo}
            alt={"Profile Pic"}
            width={100}
            height={100}
            style={{
              position: "relative",
              top: "20px",
              right: "90px",
              border: "2px solid white",
              borderRadius: "50%",
            }}
          />
          <CounterCards cards={cards}></CounterCards>

          <SocialM>@neueFischeWhale</SocialM>
          <EditButton onClick={handleReset}>Edit</EditButton>
        </StyledCard>
      )}
    </>
  );
}

const Exit = styled.div`
  z-index: 30;
  top: 20px;
  position: absolute;
  right: 14px;
`;
const StyledForm = styled.form`
  display: flex;
  position: relative;
  justify-content: center;
  top: 160px;
  display: block;
  width: 315px;
  height: 250px;
  text-align: center;
  border: 1px solid white;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: #faf1da;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Reset = styled.button`
  position: relative;
  top: 20px;
  left: -20px;
  border-radius: 10px;
`;

const Create = styled.button`
  position: relative;
  top: 20px;
  right: -20px;
  border-radius: 10px;
`;

const Name = styled.div`
  position: relative;
  top: 70px;
  left: 32px;
`;

const NameInput = styled.div`
  position: relative;
  top: -10px;
  left: -6px;
`;

const Title = styled.h4`
  position: relative;
  top: -10px;
`;

const Upload = styled.div`
  position: relative;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 5px;
  gap: 10px;
`;

const StyledCard = styled.div`
  box-sizing: border-box;
  text-align: center;
  background-color: #faf1da;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  width: 310px;
  height: 300px;
  margin: 16px auto;
  position: relative;
  display: block;
  line-height: 35px;
  top: 100px;
`;

const EditButton = styled.button`
  margin: 16px;
  right: 0px;
  position: absolute;
  top: 0px;
  border-radius: 8px;
`;

const SocialM = styled.div`
  position: absolute;
  top: 90px;
  right: 40px;
  color: #2a2a2a;
`;

const PopUp = styled.div`
  border: 1px solid grey;
  position: absolute;
  background: rgba(255, 253, 245);
  right: 80px;
  top: 200px;
  z-index: 10;
  left: 100px;
  border-radius: 10px;
  font-size: 18px;
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
