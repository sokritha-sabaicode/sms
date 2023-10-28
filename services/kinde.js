const {KindeClient, GrantType} = require("@kinde-oss/kinde-nodejs-sdk");
const config = require("../config");

const options = {
	domain: config.KINDE_DOMAIN,
	clientId: config.KINDE_CLIENT_ID,
	clientSecret: config.KINDE_CLIENT_SECRET,
	redirectUri: config.KINDE_REDIRECT_URI,
	logoutRedirectUri: config.KINDE_LOGOUT_REDIRECT_URI,
	grantType: GrantType.PKCE
};

const kindeClient = new KindeClient(options);

module.exports = kindeClient;