import { Link } from 'react-router-dom';
import { Grid, Typography, IconButton, Button } from '@mui/material';
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
			direction="column"
			sx={{
				padding: '10rem 0px',
			}}
			gap={4}
		>
			<Grid item>
				<Typography variant="h6" color="primary.light">
					Hello, I&apos;m
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant="h3" color="primary.main">
					Full Stack Developer
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant="subtitile1" color="primary.light">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor.
				</Typography>
			</Grid>
			<Grid item container direction="row" spacing={2}>
				{icons.map((item) => (
					<Grid item key={item.id}>
						<IconButton
							LinkComponent={Link}
							href={item.link}
							target="_blank"
							rel="noopener"
							aria-label={item.name}
						>
							{item.icon}
						</IconButton>
					</Grid>
				))}
			</Grid>
			<Grid item>
				<Button
					sx={{
						textTransform: 'capitalize',
						padding: '10px 10px',
					}}
					variant="contained"
				>
					Contact me
				</Button>
			</Grid>
			<Grid
				item
				container
				justifyContent="space-around"
				sx={{
					marginTop: {
						xs: '2rem',
						md: '6rem',
						xl: '8rem,',
					},
				}}
			>
				{archivements.map((item) => (
					<Grid item key={item} direction="column">
						<Grid item>
							<Typography variant="h3">{item.number}</Typography>
						</Grid>
						<Grid item>
							<Typography align="center" variant="body2" color="primary.light">
								{item.title}
							</Typography>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};
