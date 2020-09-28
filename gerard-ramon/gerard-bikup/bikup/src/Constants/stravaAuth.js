export const STRAVA_AUTH = {
	CLIENT_ID: '37664',
	REDIRECT_URL: 'http://localhost:3000/auth/strava',
	SCOPE: 'read_all,activity:read,profile:read_all',
};

export const STRAVA_AUTH_FULL_URL = `http://www.strava.com/oauth/authorize?client_id=${STRAVA_AUTH.CLIENT_ID}&response_type=code&redirect_uri=${STRAVA_AUTH.REDIRECT_URL}&approval_prompt=force&scope=${STRAVA_AUTH.SCOPE}`;
