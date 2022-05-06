const { User } = require("../models/user");

const { catchAsync } = require("../utils/catchAsync");

const loginExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const accountExist = await User.findOne({
    where: {
      id,
    },
  });

  if (!accountExist) {
    return res.status(404).json({
      message: "Account doesnt exist given that login",
    });
  }
  req.accountExist;
  next();
});

module.exports = { loginExist };
