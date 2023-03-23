import styled from "styled-components";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import { CldImage, CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import CounterCards from "../CounterCards";

export default function ProfileForm({ cards }) {
  const [imageProfile, setImageProfile] = useLocalStorageState("imageProfile", {
    defaultValue: {},
  });
  const [showProfile, setShowProfile] = useLocalStorageState("showProfile", {
    defaultValue: false,
  });
  const [name, setName] = useLocalStorageState("name", { defaultValue: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowProfile(true);
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
                <Image src={imageProfile.src} width={100} height={100} alt="" />
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
            src={imageProfile}
            alt={"My Wish photo"}
            width="100"
            height="100"
            style={{
              position: "relative",
              top: "10px",
              right: "90px",
              borderRadius: "50%",
            }}
          />
          <CounterCards cards={cards}></CounterCards>

          <SocialM>@neueFischeWhale</SocialM>
          <EditButton onClick={handleReset}>Edit Profile</EditButton>
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
  background-color: #eaeaea;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Reset = styled.button`
  position: relative;
  top: 20px;
  left: -20px;
`;

const Create = styled.button`
  position: relative;
  top: 20px;
  right: -20px;
`;

const Name = styled.div`
  position: relative;
  top: 60px;
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
`;

const StyledCard = styled.div`
  box-sizing: border-box;
  text-align: center;
  background: #eaeaea;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  width: 340px;
  height: 300px;
  margin: 16px auto;
  position: relative;
  display: block;
  line-height: 35px;
  top: 100px;
`;

const EditButton = styled.button`
  margin: 16px;
  position: absolute;
  top: 0px;
`;

const SocialM = styled.div`
  position: absolute;
  top: 80px;
  right: 58px;
  color: grey;
`;
