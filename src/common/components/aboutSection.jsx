import { Grid, Typography, Avatar } from '@mui/material';
import { BasicTab } from '../utilities/tabs';

const tabPanel = [
	{
		title: 'Skills',
		data: [
			{ id: '001', skill: 'Node.js' },
			{ id: '002', skill: 'Express' },
			{ id: '003', skill: 'JavaScript' },
			{ id: '004', skill: 'React' },
			{ id: '005', skill: 'Nextjs' },
		],
	},
	{
		title: 'Education',
		data: [
			{
				id: '006',
				skill: 'Bachelor of Science, Computer Software Engineering',
			},
			{ id: '007', skill: 'CCNA Cisco' },
		],
	},
];

export const AboutSection = () => (
	<Grid item container direction="column" gap={6} alignItems="center">
		<Grid item>
			<Typography variant="h2">About Me</Typography>
		</Grid>
		<Grid item>
			<Grid container justifyContent="space-between">
				<Grid
					xs={12}
					md={3}
					item
					sx={{
						display: {
							xs: 'none',
							sm: 'none',
							md: 'flex',
						},
					}}
				>
					<Avatar
						src="https://res.cloudinary.com/dwz5lx2k7/image/upload/v1677023871/portfolio/ecom_u4wair.png"
						sx={{
							width: { xs: 100, sm: 170 },
							height: { xs: 100, sm: 170 },
						}}
					/>
				</Grid>
				<Grid item xs={12} md={9} container direction="column" gap={3}>
					<Typography variant="body1" color="primary.light">
						I am a software engineer with a passion for solving complex problems
						and creating innovative solutions. With over three years of
						experience in full-stack mobile and web development. I enjoy working
						in collaborative environments and thrive on challenges that allow me
						to push the boundaries of what&apos;s possible with technology.
					</Typography>
					<BasicTab tabPanel={tabPanel} />
				</Grid>
			</Grid>
		</Grid>
	</Grid>
);
