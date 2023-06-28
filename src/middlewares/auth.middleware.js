const users = require("../models/users.models");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("jwt"),
    secretOrKey: "megustaelarte",
  };
  passport.use(
    new JwtStrategy(opts, async (decoded, done) => {
      try {
        const response = await users.findOne({
          where: {
            id: decoded.id,
          },
        });
        if (!response) return done(null, false);
        return done(null, decoded);
      } catch (error) {
        done(error.message);
      }
    })
  );
};
