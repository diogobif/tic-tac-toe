export function findMatch(matrix, playerChar) {
  const matLength = matrix[0].length;

  function checkRow(row) {
    return row.filter(el => el === playerChar).length === matLength;
  }

  function findMatchDiagAsc() {
    let row = [];
    for (let i = 0; i < matLength; i++) {
      row.push(matrix[i][i]);
    }

    return checkRow(row);
  }

  function findMatchDiagDesc() {
    let row = [];
    for (let i = 0; i < matLength; i++) {
      row.push(matrix[i][(matLength - i) - 1]);
    }

    return checkRow(row);
  }

  function findMatchCol() {
    for (let cl = 0; cl < matLength; cl++) {
      let row = [];
      for (let rw = 0; rw < matLength; rw++) {
        row.push(matrix[rw][cl]);
      }

      if (checkRow(row)) 
        return true
    }

    return false;
  }

  function findMatchRow() {
    for (let i = 0; i < matLength; i++) {
      if (checkRow(matrix[i])) {
        return true;
      }
    }

    return false;
  }

  if (findMatchDiagAsc()) return true;

  if (findMatchDiagDesc()) return true;

  if (findMatchCol()) return true;

  if (findMatchRow()) return true;

  return false;
}

export function initializeMatrix(cols) {
  let matrix = [];
  for (let rw = 0; rw < cols; rw++) {
    matrix[rw] = [];
    for (let cl = 0; cl < cols; cl++) {
      matrix[rw][cl] = null;
    }
  }
  return matrix;
}


