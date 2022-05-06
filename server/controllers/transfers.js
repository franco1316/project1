const { Transfer } = require("../models/transfer");
const { User } = require("../models/user");

const { catchAsync } = require("../utils/catchAsync");

const addNewTransfer = catchAsync(async (req, res) => {
  const { amount, senderUserId, receiverUserId } = req.body;

  const amountNumber = amount.split(" ", 1);
  const symbol = amount.split(" ")[1];

  const originAccount = User.findOne({
    where: {
      id: senderUserId,
    },
  });

  const destinataryAccount = User.findOne({
    where: {
      id: receiverUserId,
    },
  });

  if (!originAccount || !destinataryAccount) {
    return res.status(404).json({
      message: "Information was invalid",
    });
  }

  if (originAccount.amount < amountNumber) {
    return res.status(400).json({
      message: "This account dont have enough money for this transfer",
    });
  }

  const newAmountDestinatary = destinataryAccount.amount + amountNumber;
  const newAmountOrigin = originAccount.amount - amountNumber;

  destinataryAccount.amount = `${newAmountDestinatary} ${symbol}`;
  originAccount.amount = `${newAmountOrigin} ${symbol}`;

  const newTransfer = await Transfer.create({
    amount,
    senderUserId,
    receiverUserId,
  });

  (await originAccount).update({
    amount,
  });//no se si de verdad hacia falta hacerlo asi pero por si acaso
  (await destinataryAccount).update({
    amount,
  });

  res.status(201).json({
    newTransfer,
  });

  res.status(200).json({
    originAccount,
    destinataryAccount
  })
});

module.exports = { addNewTransfer };
