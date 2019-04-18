import React from 'react';
import styled from 'styled-components';
import color from '../styles/color';
import Footer from './Footer';

const BackgroundContainer = styled.div`
	display: flex;
	flex: 1;
	top: 0;
	width: 100%;
	height: 100vh;
	background: rgb(19,45,79);
	background: linear-gradient(180deg, rgba(19,45,79,1) 27%, rgba(16,14,47,1) 100%);
`
const Text = styled.p`
	margin-block-start: 0;
    margin-block-end: 0;
	color: ${color.white};
`
const TextContainerLeft = styled.div`
	height: auto;
	display: flex;
	flex-direction: row;
	flex: 1 1;
	justify-content: flex-start;
`
const TextContainerRight = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1 1;
	justify-content: flex-end;
`
const Link = styled.a`
	padding: 16px;
    text-decoration: none;
`

export default function PortfolioContainer () {
	const links = [{ title: 'portfolio', link: '#' },
	{ title: 'about', link: '#' },
	{ title: 'contact', link: '#'}]
	return (
		<BackgroundContainer>
			<TextContainerLeft>
				<Link href={'#'}><Text>Galina M. Nosti</Text></Link>
			</TextContainerLeft>
			<TextContainerRight>
				{
					links.map(function (item, index){
						return <Link key={index} href={item.link}><Text>{item.title}</Text></Link>
					})
				}
			</TextContainerRight>
			<Footer />
		</BackgroundContainer>
	)
}
