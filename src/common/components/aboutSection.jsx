import { Grid, Typography, Avatar } from '@mui/material';
import { BasicTab } from '../utilities/tabs';

export const AboutSection = () => {
	const tabTitle = ['Skill', 'Education'];
	return (
		<Grid container direction="column" gap={4}>
			<Grid item>
				<Typography variant="h3">About Me</Typography>
			</Grid>
			<Grid item container>
				<Grid item xs={12} md={3}>
					<Avatar
						sx={{
							display: {
								xs: 'none',
								sm: 'none',
								md: 'flex',
							},
							width: { xs: 100, sm: 170 },
							height: { xs: 100, sm: 170 },
						}}
					/>
				</Grid>
				<Grid item xs={12} md={9} container direction="column" gap={3}>
					<Grid item>
						<Typography variant="body1" color="primary.light">
							I am a software engineer with a passion for solving complex
							problems and creating innovative solutions. With over three years
							of experience in full-stack mobile and web development. I enjoy
							working in collaborative environments and thrive on challenges
							that allow me to push the boundaries of what&apos;s possible with
							technology.
						</Typography>
					</Grid>
					<Grid item>
						<BasicTab tabTitle={tabTitle} tabPanel={[]} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
