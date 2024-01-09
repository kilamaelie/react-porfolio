/* eslint-disable react/jsx-no-useless-fragment */
import { Grid } from '@mui/material';
import { HeroSection } from './heroSection';

const Home = () => {
	return (
		<Grid
			container
			component="main"
			xs={11}
			md={8}
			xl={6}
			sx={{
				marginInline: 'auto',
			}}
		>
			<HeroSection />
		</Grid>
	);
};

export default Home;
