
//User Actions

const signUp = (userName) => {
  localStorage.setItem('user', userName);
  //Set iniatial coins "100"
  localStorage.setItem('balance', '100');
};

const loadUser =  () => {
  const user =  localStorage.getItem('user');
  return user
};

//Coin Transfer

let gMovesList = [];

const getCurrBalance = () => {
  const balance =  +localStorage.getItem('balance');
  return balance;
}

const transferCoinTo = (amount, contact) => {
  let currBalance = getCurrBalance()
  currBalance -= amount;
  localStorage.setItem('balance', currBalance.toString());
  (!gMovesList) ? gMovesList = [] : '';
  const moveDetails = {to: contact, amount, createdAt: Date.now() }
  gMovesList.push(moveDetails);
  localStorage.setItem('moves', JSON.stringify(gMovesList));
}

const getLastTransactions = () => {
  gMovesList = JSON.parse(localStorage.getItem('moves'))
  if (!gMovesList) return
  const movesToReturn = gMovesList.slice(gMovesList.length - 3, gMovesList.length);
  return movesToReturn;
}

export const UserService = {
  signUp,
  loadUser,
  getCurrBalance,
  transferCoinTo,
  getLastTransactions
};
