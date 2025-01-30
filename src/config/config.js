export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const clientId = import.meta.env.VITE_CLIENT_ID;
export const liveURL = import.meta.env.VITE_REDIRECT_URI; // Byt till korrekt variabel
export const devURL = 'http://localhost:5173/callback'; // Ändrat till HTTP + "/callback"
export const redirectURL = import.meta.env.PROD ? liveURL : devURL;

// Spotify scopes
export const scopes = [
	'playlist-read-collaborative',
	'playlist-modify-public',
	'playlist-read-private',
	'playlist-modify-private',
	'app-remote-control',
	'streaming',
	'user-read-email',
	'user-read-private',
	'user-library-modify',
	'user-library-read',
	'user-top-read',
	'user-read-playback-position',
	'ugc-image-upload',
	'user-modify-playback-state',
	'user-read-playback-state',
	'user-read-currently-playing',
	'user-follow-modify',
	'user-follow-read',
	'user-read-recently-played'
];

// Skapa en URL-korrekt redirect_uri
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
	redirectURL
)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token&show_dialog=true`;
