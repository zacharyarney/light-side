const config = {
  url: process.env.REACT_APP_OKTA_URL,
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  redirectUri: window.location.origin + '/login',
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  pkce: true,
};

export default config;
