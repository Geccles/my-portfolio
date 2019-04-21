import React from 'react';
import styled from 'styled-components';
import color from '../styles/color';
import Footer from './Footer';
import WelcomeScreen from '../assets/Welcome_Screen.png'
import LoginScreen from '../assets/Login_Screen.png'

const BackgroundContainer = styled.div`
	top: 0;
	width: 100%;
	height: 100vh;
	background: rgb(19,45,79);
	background: linear-gradient(180deg, rgba(19,45,79,1) 27%, rgba(16,14,47,1) 100%);
`
const TopNaviagtion = styled.div`
	display: flex;
	padding: 8px;
`
const Text = styled.p`
	margin-block-start: 0;
    margin-block-end: 0;
	color: ${color.white};
`
const TextContainerLeft = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-start;
`
const TextContainerRight = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`
const Link = styled.a`
	padding: 16px;
    text-decoration: none;
`
const ImageContainer = styled.div`
	display: flex;
	justify-content: space-around;
	img {
		height: 80vh;
		width: auto;
	}
`
const Wrapper = styled.div`
	padding: 16px;
	display: flex;
	flex: 1;
	justify-content: center;
`

export default function PortfolioContainer () {
	const links = [{ title: 'portfolio', link: '#' },
	{ title: 'about', link: '#' },
	{ title: 'contact', link: '#'}]

	const images = [{ src: WelcomeScreen, alt: 'Welcome Screen' },
	{ src: LoginScreen, alt: 'Login Screen' },
	{src: WelcomeScreen, alt: 'Home Screen'},
	{src: LoginScreen, alt: 'Other Screen'}]
	return (
		<BackgroundContainer>
			<TopNaviagtion>
				<TextContainerLeft>
					<Link href={'#'}><Text>Galina Nosti</Text></Link>
				</TextContainerLeft>
				<TextContainerRight>
					{
						links.map(function (item, index){
							return <Link key={index} href={item.link}><Text>{item.title}</Text></Link>
						})
					}
				</TextContainerRight>
			</TopNaviagtion>
			<ImageContainer>
				{
					images.map(function (item, index){
						return 	<Wrapper><img key={index} src={item.src} alt={item.alt} /></Wrapper>
					})
				}
			</ImageContainer>
			<Footer />
		</BackgroundContainer>
	)
}
