import { useEffect, useState } from 'react';
import { Box, List, Typography } from '@mui/material';

const Library = ({ spotifyApi, token }) => {
	const [albumList, setAlbumList] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getPlaylists() {
			if (!spotifyApi) return;

			const data = await spotifyApi.getUserPlaylists();

			setLoading(false);
			setAlbumList(data.body.items);
			console.log(data.body.items);
		}
		getPlaylists();
	}, [spotifyApi, token]);

	return (
		<Box
			id="Library"
			px={3}
			sx={{
				display: { xs: 'flex', md: 'flex' },
				bgcolor: 'background.default',
				flex: 1,
				flexDirection: 'column',
				overflowY: 'auto'
			}}
		>
			<Typography py={3} variant="h2" fontWeight="bold" sx={{ color: 'text.primary', fontSize: 30 }}>
				Ditt bibliotek
			</Typography>
			<List>{/* {PlaylistItems()} */}</List>
		</Box>
	);
};

export default Library;