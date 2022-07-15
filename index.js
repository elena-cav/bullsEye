const bullsEye = (size) => {
  const board = Array.from(Array(size), () => Array(size).fill(1));
  let count = 1;
  let isDescending = false;
  let isEven = size % 2 === 0;

  for (let i = 1; i < size - 1; i++) {
    const deleteCount = size - count * 2;
    const insert = new Array(deleteCount).fill(count + 1);
    board[i].splice(0, board[i].length, ...board[i - 1].flat());
    board[i].splice(count, deleteCount, insert);
    board[i].splice(0, board[i].length, ...board[i].flat());

    if (count < size / 2 - 1 && !isDescending) {
      count++;
    } else {
      if (count !== size - 1 && !isEven) {
        isDescending = true;
        count--;
      } else {
        isEven = false;
      }
    }
  }
  return board;
};

export default bullsEye;
