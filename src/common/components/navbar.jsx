/* eslint-disable import/extensions */
import React, { useRef } from 'react';
import {
	AppBar,
	Grid,
	IconButton,
	// Toolbar,
	Typography,
	Link as MuiLink,
	ButtonBase,
} from '@mui/material';
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link } from 'react-router-dom';
import { DrawerBar } from '../utilities/drawer';
import { navLinks } from '../constant/navLink';

export const Navbar = () => {
	const navBack = useRef(false);
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 50,
	});

	navBack.current = trigger;
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<AppBar
			position="fixed"
			elevation={0}
			component="nav"
			style={{
				background: !navBack.current ? `rgb(0, 0, 0,0)` : `hsla(0,0%,7%,.10)`,
				backdropFilter: 'blur(12px)',
			}}
			sx={{
				alignItems: 'center',
			}}
		>
			{/* <Toolbar disableGutters> */}
			<Grid
				item
				container
				xs={11}
				md={8}
				xl={6}
				marginTop="20px"
				sx={
					{
						// marginInline: 'auto',
					}
				}
				justifyContent="space-between"
				alignContent="center"
			>
				<Typography variant="h3" color="primary.main">
					DevsOp
					<Typography variant="h3" color="secondary.main" component="span">
						.
					</Typography>
				</Typography>

				<Grid
					item
					sx={{
						display: { xs: 'none', md: 'flex' },
						maxWidth: 'fit-content',
					}}
					alignContent="center"
					container
					gap={2}
				>
					{navLinks.map((page) => (
						<MuiLink
							href={page.link}
							key={page.id}
							component={Link}
							underline="none"
							textAlign="center"
							sx={{
								// my: 2,

								display: 'block',
								textTransform: 'none',
								fontWeight: 300,
							}}
						>
							{page.name}
						</MuiLink>
					))}
				</Grid>
				<Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
					<ButtonBase
						aria-label="My resume"
						to="#"
						sx={{
							margin: '15px 0px',
							textTransform: 'capitalize',
							// borderRadius: 2,
							// padding: '10px 30px',
						}}
						color="secondary"
						variant="main"
						component={Link}
					>
						My Resume
					</ButtonBase>
				</Grid>
				<Grid item sx={{ display: { xs: 'flex', md: 'none' } }}>
					<IconButton
						aria-label="menu"
						color="inherit"
						onClick={() => handleDrawerOpen()}
					>
						<SegmentOutlinedIcon sx={{ color: 'red' }} />
					</IconButton>
				</Grid>
			</Grid>
			{/* </Toolbar> */}
			<DrawerBar open={open} onClick={handleDrawerClose} />
		</AppBar>
	);
};
