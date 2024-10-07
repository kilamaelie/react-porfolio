import { Grid, Typography, TextField, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { icons } from '../constant/icons';

const contactForm = [
	{
		id: '1',
		type: 'email',
		title: 'Email',
		placeholder: 'jon@mail.com',
		required: true,
	},
	{
		id: '2',
		type: 'text',
		title: 'Subject',
		placeholder: 'Just saying Hey',
		required: true,
	},
	{
		id: '3',
		type: 'text',
		title: 'Message',
		placeholder: "Let's talk about ...",
		rows: 2,
		multiline: true,
		required: true,
	},
];

export const ContactSection = () => {
	return (
		<Grid container direction="column" gap={7}>
			<Grid item>
				<Typography title="title" component="p" align="center" variant="h3">
					Let&apos;s Connect
				</Typography>
			</Grid>
			<Grid item container spacing={5}>
				<Grid item xs={12} sm={12} md={6} container direction="column" gap={5}>
					<Grid item>
						<Typography variant="body1" color="primary.main">
							I am currently exploring new opportunities, and my inbox is always
							open. Whether you have a question or just want to say hi,
							I&apos;ll do my best to get back to you!
						</Typography>
					</Grid>
					<Grid item container>
						{icons.map((item) => (
							<Grid item key={item.id}>
								<IconButton
									// LinkComponent={Link}
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
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<form>
						<Grid container direction="row" gap={3}>
							{contactForm.map((items) => (
								<Grid
									item
									container
									direction="column"
									gap={1}
									key={items.title}
								>
									<Grid item>
										<Typography variant="body2">{items.title}</Typography>
									</Grid>
									<Grid item>
										<TextField size="small" fullWidth {...items} />
									</Grid>
								</Grid>
							))}
							<Grid item>
								<LoadingButton fullWidth type="submit" variant="contained">
									Send message
								</LoadingButton>
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</Grid>
	);
};
