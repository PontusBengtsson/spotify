import { Box, Skeleton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './NavPlaylist.css';

const NavPlaylist = ({ name, id, loading }) => {
	return (
		<NavLink className="playlist__navlink" to={loading ? '' : `/playlist/${id}`} style={{ textDecoration: 'none' }}>
			<Box
				px={3}
				py={1}
				sx={{
					color: 'text.secondary',
					cursor: 'pointer',
					'&:hover': { color: 'text.primary' }
				}}
			>
				{loading ? <Skeleton variant={'text'} height={'14px'} width={'70px'} /> : name}
			</Box>
		</NavLink>
	);
};

export default NavPlaylist;
