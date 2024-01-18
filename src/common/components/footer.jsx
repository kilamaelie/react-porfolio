import { Grid, Typography } from '@mui/material';

export const Footer = () => {
	return (
		<Grid
			container
			component="footer"
			justifyContent="center"
			xs={11}
			md={8}
			xl={6}
			sx={{
				marginInline: 'auto',
				padding: '40px 0px',
			}}
		>
			<Grid item>
				<Typography variant="caption" color="primary.light">
					Copyright &copy; {new Date().getFullYear()} Made with ❤️ by Kilama.
					All right reserved
				</Typography>
			</Grid>
		</Grid>
	);
};
