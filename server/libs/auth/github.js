const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;

const init = require('./init');

const strategy = new GithubStrategy(
    {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: `${process.env.BASE_URL}/auth/return`
    },
    (accessToken, refreshToken, profile, done) => {
        done(null, profile);
    }
);

passport.use(strategy);

init();

module.exports = passport;
