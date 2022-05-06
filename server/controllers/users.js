const { User } = require("../models/user");

const { catchAsync } = require("../utils/catchAsync");

const getTransferById = catchAsync(async (req, res) => {
  const { id } = req.params; //el id es del user no de la transfer, un user puede tener varias transfers

  const selectUser = await User.findOne({
    //el usuario contendra todas sus transferencias
    //supuse que las tendria pero sin la conexion entre users y las transferencias no hay ninguna transferencia aqui
    where: { id },
  });

  res.status(200).json({
    selectUser,
  });
});

const addNewAccount = catchAsync(async (req, res) => {
  const { name, password } = req.body;

  number = Math.floor(Math.random() * 1000000);
  
  const accountNumber = number + ""; 
  //Nota: prettier me mueve de sitio incluso los comentarios

  const amount = '1000 $'

  const newAccount = await User.create({
    name,
    accountNumber,
    password,
    amount,
  });

  res.status(201).json({
    newAccount,
  });
});

const logginInAccount = catchAsync(async (req, res) => {
  const { accountNumber, password } = req.body;

  const updateUser = await User.findOne({
    where: {
      accountNumber,
      password,
    },
  });

  if (!updateUser) {
    return res.status(404).json({
      message: "Login invalid",
    });
  }

  res.status(200).json({
    status: "Logged in",
  });
});

module.exports = {
  getTransferById,
  addNewAccount,
  logginInAccount,
};
