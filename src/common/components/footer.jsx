import { Grid } from '@mui/material';

export const Footer = () => {
	return (
		<Grid
			container
			component="footer"
			xs={11}
			md={8}
			xl={6}
			sx={{
				marginInline: 'auto',
			}}
		>
			<Grid item>footer</Grid>
		</Grid>
	);
};
