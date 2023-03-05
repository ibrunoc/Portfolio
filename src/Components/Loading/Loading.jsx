import './Style/Loading.modules.scss';
import React from 'react';

import { MutatingDots  } from 'react-loader-spinner';

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
				<MutatingDots color="#78D7DD" secondaryColor='#fc4545' />
			</section>
		</div>	
	);
};