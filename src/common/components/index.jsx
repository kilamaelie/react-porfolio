/* eslint-disable react/jsx-no-useless-fragment */
import { Grid } from '@mui/material';
import { HeroSection } from './heroSection';
import { AboutSection } from './aboutSection';
import { ProjectSection } from './project';

const Home = () => {
	return (
		<Grid
			container
			component="main"
			xs={10}
			md={8}
			xl={6}
			sx={{
				marginInline: 'auto',
			}}
			gap={10}
		>
			<HeroSection />
			<AboutSection />
			<ProjectSection />
		</Grid>
	);
};

export default Home;
