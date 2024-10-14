/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */

import { Link } from 'react-router-dom';
import { Drawer, Grid, IconButton, MenuItem, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { navLinks } from '../constant/navLink';
import { icons } from '../constant/icons';

export const DrawerBar = (props) => {
	return (
		<Drawer
			anchor="right"
			variant="temporary"
			{...props}
			ModalProps={{
				keepMounted: true, // Better open performance on mobile.
			}}
			sx={{
				display: { xs: 'block', md: 'none' },
				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: '250px' },
			}}
		>
			<Grid
				container
				direction="column"
				mt={5}
				sx={{
					position: 'relative',
					minHeight: '90vh',
				}}
			>
				<Grid
					item
					container
					justifyContent="flex-end"
					alignItems="flex-end"
					pr={5}
					mb={5}
				>
					<IconButton>
						<CloseIcon sx={{ color: '#FFF' }} />
					</IconButton>
				</Grid>
				<Grid item p={2}>
					{navLinks.map((page) => (
						<Link to={page.link} key={page.id}>
							<MenuItem onClick={() => props.onClick()}>
								<Grid container spacing={3}>
									<Grid item>
										<HorizontalRuleIcon
											sx={{ color: '#FFF', fontSize: '30px' }}
										/>
									</Grid>
									<Grid item>
										<Typography
											textAlign="center"
											sx={{ color: '#FFF', fontWeight: 'bold' }}
										>
											{page.name}
										</Typography>
									</Grid>
								</Grid>
							</MenuItem>
						</Link>
					))}
				</Grid>
				<Grid
					item
					sx={{ position: 'absolute', bottom: 0, left: '5px', right: '5px' }}
				>
					<Grid container direction="row" justifyContent="space-around">
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
				</Grid>
			</Grid>
		</Drawer>
	);
};
