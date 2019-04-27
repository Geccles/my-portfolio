import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	padding: 0px 16px;
`
const Wrapper = styled.div`
	width: 25%;
`

export default function ImageContainer ({images}) {

	return (
		<Container>
			{
				images.map(function (item, index){
					return 	<Wrapper><img key={index} src={item.src} alt={item.alt} /></Wrapper>
				})
			}
		</Container>
	)
}
