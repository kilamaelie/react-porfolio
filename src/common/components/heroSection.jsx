import { Link } from 'react-router-dom';
import { Grid, Typography, IconButton, ButtonBase } from '@mui/material';
import { icons } from '../constant/icons';

const archivements = [
	{
		title: 'Projects',
		number: '+20',
	},
	{
		title: 'Users',
		number: '+10',
	},
	{
		title: 'Years',
		number: '+4',
	},
];

export const HeroSection = () => {
	return (
		<Grid
			container
			component="div"
			alignItems="center"
			direction="column"
			sx={{
				paddingTop: '10rem',
			}}
			gap={{
				xs: 6,
				sm: 10,
			}}
		>
			<Grid item>
				<Typography variant="h6" color="primary.light" textAlign="center">
					Hello, I&apos;m
				</Typography>
				<Typography variant="h2" color="primary.main" textAlign="center">
					Full Stack Developer
				</Typography>
			</Grid>
			<Grid item>
				<Typography textAlign="center" variant="body2">
					I am a software engineer with a passion for solving complex problems
					and creating innovative solutions. With over three years of experience
					in full-stack mobile and web development. I enjoy working in
					collaborative environments and thrive on challenges that allow me to
					push the boundaries of what &apos;s possible with technology.
				</Typography>
			</Grid>
			<Grid item container justifyContent="center" gap={6}>
				{archivements.map((item) => (
					<Grid
						item
						key={item.title}
						container
						direction="column"
						alignItems="center"
						gap={1}
						xs={3}
						sm={2}
					>
						<Typography align="center" variant="body2" color="primary.light">
							{item.title}
						</Typography>
						<Typography variant="h3">{item.number}</Typography>
					</Grid>
				))}
			</Grid>
			<Grid item container flexDirection="column" alignItems="center" gap={5}>
				<Grid item container direction="row" gap={2} justifyContent="center">
					{icons.map((item) => (
						<IconButton
							key={item.id}
							LinkComponent={Link}
							href={item.link}
							target="_blank"
							rel="noopener"
							aria-label={item.name}
							disableRipple
							sx={{
								opacity: { md: 0.5 },
								'&:hover': {
									opacity: 1,
								},
							}}
						>
							{item.icon}
						</IconButton>
					))}
				</Grid>
				<ButtonBase variant="main">Contact me</ButtonBase>
			</Grid>
		</Grid>
	);
};
