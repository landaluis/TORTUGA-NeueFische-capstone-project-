import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TicketIcon from "../../public/TicketIcon.svg";

export default function About() {
	const [showAbout, setShowAbout] = useState(false);
	return (
		<>
			<AboutButton
				onClick={() => setShowAbout(!showAbout)}
				showAbout={showAbout}>
				?
			</AboutButton>
			<AboutWrapper>
				{showAbout ? (
					<InfoContainer>
						<AboutInfo>
							<h1>About</h1>
							<div>
								Consumption is more than just satisfying basic needs. We spend
								money not only to have a roof over our heads, clothes on our
								bodies and food in the refrigerator.
							</div>{" "}
							<br></br>
							<div>
								We also spend money to make our lives more pleasant and
								comfortable and to fulfill long cherished desires.
							</div>
							<br></br>{" "}
							<div>
								Tortuga accompanies and motivates you to easily fulfill your
								small and big dreams with a savings plan set by you. This way
								you can not only enjoy the good feeling of fulfilling your
								wishes without worries, but also keep track of your planned
								expenses and finances.
							</div>
							<h2>How does it work?</h2>
							<div>
								{" "}
								In the beginning is the wish, in the beginning is the egg.
								Create a turtle egg for your spending dream. Design it
								individually with a motivating illustration of your wish.
								Reflect on why this desire is particularly important to you and
								define your individual reasoning. This clear vision will help
								you not to lose sight of your saving goal.
							</div>{" "}
							<br></br>
							<div>
								Now it&apos;s time to get down to business! Indicate how often
								you want to set aside how much money for this goal. You will
								immediately see when your turtle will hatch according to your
								individual savings plan allowing you to fulfill your dream.{" "}
							</div>
							<br></br>
							<div>
								Tip:{" "}
								<Link href="https://www.coolcrafts.com/cool-diy-piggy-banks/">
									Craft your own piggy bank
								</Link>
								, wich you feed with your savings rates as they become due.
							</div>
							<br></br>
							<div>
								You have created your first turtle egg? Great, then it can be
								hatched now. The automatically created overview card always
								shows you your current savings progress and reminds you of your
								vision. With each successful saving round, your turtle egg
								slowly but surely turns into a turtle. When it gets its shell,
								your savings goal is reached and you can make your dream come
								true.{" "}
							</div>
							<br></br>
							<div>One wish is not enough for you?</div>
							<div>
								Of course you can create as many turtle eggs as you want.
								Tortuga shows you the progress for each wish on the overview
								page.
							</div>{" "}
							<br></br>
							<div>You received a random windfall?</div>
							<div>
								Create tickets
								<Image
									src={TicketIcon}
									alt="Ticket Icon"
									title="AddCard"
									width="25"
									height="25"
								/>
								and give your unexpected money blessing to your turtle eggs -
								this will give their hatching process an extra boost.{" "}
							</div>
							<br></br>
							<div>
								You&apos;ve reached your goal and set aside enough money with
								Tortuga to let the turtle hatch and fulfill your wish?
							</div>
							<div>
								Congratulations! Now the way to the sea is clear - upload a
								self-shot photo of your realized dream and keep the memory of
								your success.
							</div>{" "}
							<br></br>
							<div>And the best part?</div>
							<div>
								Saving with Tortuga is almost like paying in rates, only much
								better for your finances and your feelings.
							</div>
							<br></br>
							<Copyright>© 2023 - Luis Landa All rights reserved.</Copyright>
							<LinkContainer>
								{" "}
								<Link href={"https://github.com/landaluis"}>
									https://github.com/landaluis
								</Link>
							</LinkContainer>
						</AboutInfo>
					</InfoContainer>
				) : null}
			</AboutWrapper>
		</>
	);
}

const AboutWrapper = styled.section`
	position: fixed;
	color: red;
	top: 65px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 40;
`;

const AboutButton = styled.button`
	border-radius: 50%;
	z-index: 60;
	top: 23px;
	height: 20px;
	width: 20px;
	right: 10px;
	background: rgba(171, 167, 166, 0.5);
	border: none;
	position: fixed;
	color: ${(props) => (props.showAbout ? " red" : "#faf1da")};
`;

const AboutInfo = styled.div`
	color: black;
	text-align: justify;
	width: 88%;
	padding-top: 450px;
	padding-bottom: 60px;
	position: relative;
	top: 360px;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	text-align: center;
	z-index: 26;
	position: relative;
	background: #faf1da;
	border: 1px solid #a6a6a6;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 17px;
	margin: 0 auto;
	margin-top: 30px;
	font-size: 16px;
	height: 480px;
	width: 350px;
	overflow: auto;
`;

const LinkContainer = styled.h5`
	position: absolute;
	bottom: 38px;
	margin-left: 75px;
`;

const Copyright = styled.h5`
	position: relative;

	text-align: center;
`;
