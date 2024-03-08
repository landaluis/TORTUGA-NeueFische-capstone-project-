import styled from "styled-components";
import Image from "next/image";
import TortugaBanner from "../../public/TortugaBanner.png";

export default function Header() {
	return (
		<>
			<HeaderContainer>
				<StyledHeader>T O R T U G A</StyledHeader>
				<StyledImageContainer>
					<StyledImage
						src={TortugaBanner}
						width={375}
						height={64}
						alt="Tortuga Banner"
						priority
					/>
				</StyledImageContainer>
			</HeaderContainer>
		</>
	);
}

const StyledImageContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 64px;
	background-image: url(${TortugaBanner});
	background-repeat: repeat-x;
	z-index: 11;
`;

const StyledImage = styled(Image)`
	width: inherit;
	height: 64px;
`;

const HeaderContainer = styled.div`
	position: relative;
	width: 100%;
`;

const StyledHeader = styled.h1`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 59px;
	text-align: center;
	z-index: 25;
	margin: 0 auto;
	padding-top: 23px;
	font-family: "PressStart2P-Regular";
	font-size: 20px;
	color: #faf1da;
	text-shadow: 5px 4px 0px #130805;
`;
