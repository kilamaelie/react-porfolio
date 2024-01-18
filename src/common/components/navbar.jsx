/* eslint-disable import/extensions */
import React, { useRef } from 'react';
import {
	AppBar,
	Grid,
	IconButton,
	Toolbar,
	Typography,
	Button,
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
		>
			<Toolbar disableGutters>
				<Grid
					container
					xs={11}
					md={8}
					xl={6}
					sx={{
						marginInline: 'auto',
					}}
					justifyContent="space-between"
				>
					<Grid item>
						<Typography variant="h3" color="primary.main">
							Logo
							<Typography variant="h3" color="secondary.main" component="span">
								.
							</Typography>
						</Typography>
					</Grid>

					<Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
						{navLinks.map((page) => (
							<Button
								href={page.link}
								key={page}
								LinkComponent={Link}
								sx={{
									my: 2,

									display: 'block',
									textTransform: 'none',
									fontWeight: 300,
								}}
							>
								{page.name}
							</Button>
						))}
					</Grid>
					<Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Button
							LinkComponent={Link}
							href="#"
							aria-label="My resume"
							sx={{
								margin: '15px 0px',
								textTransform: 'capitalize',
								// borderRadius: 2,
								// padding: '10px 30px',
							}}
							variant="outlined"
							color="secondary"
						>
							My Resume
						</Button>
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
			</Toolbar>
			<DrawerBar open={open} onClick={handleDrawerClose} />
		</AppBar>
	);
};
