/* eslint-disable react/jsx-no-useless-fragment */
import { AboutSection } from './aboutSection';
import { ContactSection } from './contact';
import { HeroSection } from './heroSection';
import { ProjectSection } from './project';

function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ProjectSection />
			<ContactSection />
		</>
	);
}

export default Home;
