const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:8080/home';
const clientId = '0cd0937e35ad49fca43d27f052676e0c';

const scopes = ['streaming', 'user-read-email', 'user-read-private'];

const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}`;

export default loginUrl;

// loginUrl = "https://accounts.spotify.com/authorize?client_id=YourClientId&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"
