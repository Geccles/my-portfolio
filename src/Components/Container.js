import React from 'react';
import styled from 'styled-components';
import color from '../styles/color';
import Footer from './Footer';
import { links, projectLinks } from '../utils/data'

const BackgroundContainer = styled.div`
	top: 0;
	width: 100%;
	height: 100vh;
	background: ${color.white};
	overflow: visible;
	@media (max-width: 900px) {
		height: 100%;
	}
`
const TopNaviagtion = styled.div`
	display: flex;
	padding: 8px;
	z-index: 2;
	margin-bottom: 24px;
`
const Text = styled.p`
	margin-block-start: 0;
    margin-block-end: 0;
	color: ${color.default};
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
const TextContainer = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	z-index: 9;
	display: block;
	width: 100%;
	height: 40px;
	margin-right: auto;
	margin-left: auto;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	@media (max-width: 900px) {
		position: relative;
	}
`
const ProjectLink = styled.a`
	position: static;
	left: 0%;
	top: 0%;
	z-index: 1;
	width: 25%;
	padding-right: 0px;
	float: left;
	clear: none;
	font-family: Circularpro, sans-serif;
	color: ${color.default};
	font-size: 30px;
	line-height: 5vmin;
	font-weight: 500;
	text-align: center;
	text-decoration: none;
	@media (max-width: 900px) {
		width: 100%
		padding: 40px 0px;
	}
`
const ProjectSpan = styled.span`
	position: static;
	left: 50%;
	top: 39%;
	display: block;
	margin-right: auto;
	margin-left: auto;
	font-family: 'Circularpro book', sans-serif;
	color: ${color.default};
	font-size: 10px;
	line-height: 20px;
	font-weight: 400;
	letter-spacing: 2px;
	text-transform: uppercase;
`

export default function PortfolioContainer () {

	const viewHeight = window.innerHeight
	console.log(viewHeight)
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
			<TextContainer>
					{
						projectLinks.map(function (item, index){
							return (
								<ProjectLink key={index} href={item.link}>
									<Text>
										{item.name}
									</Text>
									<ProjectSpan>
										<Text>
											{item.type}
										</Text>
									</ProjectSpan>
								</ProjectLink>
							)
						})
					}
			</TextContainer>

			<Footer />
		</BackgroundContainer>
	)
}
