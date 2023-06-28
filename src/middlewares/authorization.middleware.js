const isAdmin = async (req, res, next) => {
  const data = req.user.email;

  if (data === "admin@gmail.com") {
    return next()
  } else {
    res.status(403).json({
      message:
        "You do not have the necessary permissions to perform this action.",
    });
    return next();
  }
};

module.exports = {
  isAdmin,
};
