import { CHECKING_ARRAY } from './configs/config';

export const nullChecker = (field) => {
    return field === null;
}

export const ticTacToe = (boxesArr) => {
    for (let i = 0; i < CHECKING_ARRAY.length; i++) {
      const boxChecker = CHECKING_ARRAY[i];
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
}
