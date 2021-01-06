const Utility = {
  initialPlayerNames: {
    first: {
      firstPlayerName:"Alex",
      firstPlayerScore:0,
      XorO : "X"
    },
    second: {
      secondPlayerName:"David",
      secondPlayerScore:0,
      XorO : "O"
    }
  },

  eitherXorO : "X",

  gameName : "Tic Tac Toe",
  
  tagLine : `Let's Play and Win...`,

  winnerTagLine : "The Winner here is",

  nameNotSpecified:"Name not specified",

  chooseXorONotSpecified:"You have not specified X or O",

  nullChecker(field) {
    return field === null;
  }

}
export default Utility;
