require('dotenv').config();

const config = {
    PORTS: process.env.PORT,
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    KINDE_DOMAIN: process.env.KINDE_DOMAIN,
    KINDE_CLIENT_ID: process.env.KINDE_CLIENT_ID,
    KINDE_CLIENT_SECRET: process.env.KINDE_CLIENT_SECRET,
    KINDE_REDIRECT_URI: process.env.KINDE_REDIRECT_URI,
    KINDE_LOGOUT_REDIRECT_URI: process.env.KINDE_LOGOUT_REDIRECT_URI
}

module.exports = config;