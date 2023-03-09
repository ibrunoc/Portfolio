import './Style/Loading.modules.scss';
import React from 'react';

import { ThreeCircles } from 'react-loader-spinner';

export default function Loading() {

	const LoadingContainer = {
		height: "100vh",
		width: "100%",
		display: "flex",
		flexDirection: "row", 
		justifyContent: "center",
		alignItems: "center",
	};

	return(
		<div style={LoadingContainer}>
			<section className='loadingContainer'>			
				<ThreeCircles color="#78D7DD" />
			</section>
		</div>	
	);
};