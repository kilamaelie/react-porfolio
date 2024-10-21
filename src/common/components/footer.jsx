import { Grid, Typography } from '@mui/material';

export const Footer = () => {
	return (
		<Grid
			container
			component="footer"
			justifyContent="center"
			item
			xs={11}
			md={8}
			xl={6}
			sx={{
				marginInline: 'auto',
				padding: '40px 0px',
			}}
		>
			<Grid item>
				<Typography variant="caption" align="center" color="primary.light">
					Copyright © 2024 Made with ❤️ by &nbsp;
					<Typography
						component="a"
						sx={{ textDecoration: 'none', cursor: 'pointer' }}
						href="https://kilamaelie.com"
						variant="body2"
						target="_blank"
						color="gray"
					>
						Kilama Elie.
					</Typography>
					&nbsp; All right reserved
				</Typography>
			</Grid>
		</Grid>
	);
};
