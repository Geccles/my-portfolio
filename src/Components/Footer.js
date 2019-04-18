import React from 'react';
import styled from 'styled-components';
import color from '../styles/color';

const FooterContainer = styled.footer`
	position: absolute;
	bottom: 0;
	width: 100%;
`
const Text = styled.p`
	margin-block-start: 0;
    margin-block-end: 0;
	color: ${color.white};
`
const TextContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	justify-content: flex-start;
`
const Link = styled.a`
	padding: 16px;
    text-decoration: none;
`

export default function Footer () {
	const links = [{ title: 'github', link: 'https://github.com/Geccles' },
	{ title: 'linkedin', link: 'https://www.linkedin.com/in/galinaeccles/' },
	{ title: 'contact', link: '#'}]
	return (
		<FooterContainer>
			<TextContainer>
				{
					links.map(function (item, index){
						return <Link key={index} href={item.link}><Text>{item.title}</Text></Link>
					})
				}
			</TextContainer>
		</FooterContainer>
	)
}
