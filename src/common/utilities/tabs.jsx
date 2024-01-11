import { useState } from 'react';
import {
	Box,
	Grid,
	Tabs,
	Tab,
	Typography,
	// List,
	// LIstItem,
} from '@mui/material';
import PropTypes from 'prop-types';

const TabContent = ({ children, value, index, ...other }) => (
	<Grid role="tabpanel" hidden={value !== index} component="div" {...other}>
		{value === index && <Box sx={{ p: '10px 10px' }}>{children}</Box>}
	</Grid>
);

TabContent.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,
};

export const BasicTab = ({ tabTitle, tabPanel }) => {
	const [value, setvalue] = useState(0);

	const handleChange = (event, newValue) => {
		event.preventDefault();
		setvalue(newValue);
	};

	return (
		<Box width="100%">
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="secondary"
				// variant="fullWidth"
				aria-label="tab content"
				sx={{
					'.MuiTab-root': {
						textTransform: 'capitalize',
						display: 'flex',
						alignItems: 'flex-start',
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
				}}
			>
				{tabTitle.map((item) => (
					<Tab label={<Typography>{item}</Typography>} />
				))}
			</Tabs>
			{tabPanel}

			{/* {tabPanel.map((item, index) => (
				<TabContent value={value} index={index}>
					<List key={item} component="ul">
						<LIstItem>
							<Typography>{item}</Typography>
						</LIstItem>
					</List>
				</TabContent>
			))} */}
		</Box>
	);
};

BasicTab.propTypes = {
	tabTitle: PropTypes.array.isRequired,
	tabPanel: PropTypes.func.isRequired,
};
