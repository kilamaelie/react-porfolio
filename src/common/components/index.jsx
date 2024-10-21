/* eslint-disable react/jsx-no-useless-fragment */
import { Grid } from '@mui/material';
import { HeroSection } from './heroSection';
import { AboutSection } from './aboutSection';
import { ProjectSection } from './project';
import { ContactSection } from './contact';

const Home = () => {
	return (
		<Grid container component="main" justifyContent="center">
			<Grid
				item
				xs={10}
				md={8}
				xl={6}
				container
				gap={20}
				flexDirection="column"
				marginBottom="20px"
			>
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<ContactSection />
			</Grid>
		</Grid>
	);
};

export default Home;
