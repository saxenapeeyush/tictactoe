const Logic = {
  checkingArr: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  ticTacToe(boxesArr) {
    for (let i = 0; i < this.checkingArr.length; i++) {
      const boxChecker = this.checkingArr[i];
      const first = boxChecker[0],
        second = boxChecker[1],
        third = boxChecker[2];
      if (
        boxesArr[first] &&
        boxesArr[first] === boxesArr[second] &&
        boxesArr[first] === boxesArr[third]
      )
        return boxesArr[first];
    }
    return false;
  },
};
export default Logic;
