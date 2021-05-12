const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const hrs = mongoose.model("hr");
const keys = require("../config/keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            hrs.findById(jwt_payload.id)
                .then(hr => {
                    if (hr) {
                        return done(null, hrs);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })
    );
};