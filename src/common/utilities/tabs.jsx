/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import {
	Box,
	Grid,
	Tabs,
	Tab,
	Typography,
	CardMedia,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const TabContent = ({ children, value, index, ...other }) => (
	<Grid role="tabpanel" hidden={value !== index} component="div" {...other}>
		{value === index && <Box sx={{ p: '40px 10px' }}>{children}</Box>}
	</Grid>
);

TabContent.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,
};

const icons = [
	<GitHubIcon fontSize="15px" />,
	<VisibilityIcon fontSize="15px" />,
];

const Style = () => ({
	tab: {
		'.MuiTab-root': {
			textTransform: 'capitalize',
			display: 'flex',
			justifyContent: 'center',
			padding: 0,
			fontFamily: 'poppins',
			fontWeight: 300,
			color: 'primary.light',
		},
		'.MuiTab-root.Mui-selected': {
			color: 'primary.main',
			fontFamily: 'poppins',
			fontWeight: 600,
			borderBottom: '1px solid',
		},
		'.MuiTabs-indicator': {
			display: 'none',
		},
	},
	rootCard: {
		cursor: 'pointer',
	},
	cardMedia: {
		borderRadius: 2,
	},
	subEl: {
		padding: '0px 10px',
	},
});

const projectTabContent = ({ data }) => {
	const classes = Style();
	return (
		<Grid container spacing={6}>
			{data.map((items) => (
				<Grid
					item
					container
					xs={12}
					sm={6}
					md={4}
					xl={3}
					direction="column"
					gap={2}
					key={items}
					sx={classes.rootCard}
				>
					<Grid item>
						<CardMedia
							component="img"
							alt={items.title}
							src={items.thumbnail}
							sx={classes.cardMedia}
						/>
					</Grid>
					<Grid item container direction="column" gap={1} sx={classes.subEl}>
						<Grid item>
							<Typography variant="h6">{items.title}</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body2" color="primary.light">
								{items.description}
							</Typography>
						</Grid>
						<Grid item container spacing={4}>
							<Grid item>
								{icons.map((item) => (
									<IconButton size="small">{item}</IconButton>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			))}
		</Grid>
	);
};

const aboutTabContent = ({ data }) => {
	return (
		<List component="ul" dense={false}>
			{data.map((item) => (
				<ListItem key={item}>
					<ListItemIcon>
						<FiberManualRecordIcon fontSize="10px" />
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant="body2" fontWeight={300}>
								{item}
							</Typography>
						}
					/>
				</ListItem>
			))}
		</List>
	);
};
export const BasicTab = ({ tabPanel, tabSection, ...other }) => {
	const [value, setvalue] = useState(0);
	const classes = Style();

	const handleChange = (event, newValue) => {
		event.preventDefault();
		setvalue(newValue);
	};

	return (
		<Box width="100%">
			<Tabs
				value={value}
				onChange={handleChange}
				{...other}
				indicatorColor="primary"
				textColor="secondary"
				aria-label="tab content"
				sx={classes.tab}
			>
				{tabPanel.map((items) => (
					<Tab
						label={
							<Typography variant="body1" key={items}>
								{items.title}
							</Typography>
						}
					/>
				))}
			</Tabs>

			{tabPanel.map((items, index) => (
				<TabContent value={value} index={index} key={items}>
					{tabSection === 'Project'
						? projectTabContent(items)
						: aboutTabContent(items)}
				</TabContent>
			))}
		</Box>
	);
};

BasicTab.propTypes = {
	tabPanel: PropTypes.func.isRequired,
	centered: PropTypes.bool.isRequired,
	tabSection: PropTypes.string.isRequired,
};
