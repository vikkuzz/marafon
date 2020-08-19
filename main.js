const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

function getRow(firstRow, secondRow) {
  let char = "а";
  function getNumCh(char, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == char) {
        count++;
      }
    }
    return count;
  }
  const firstNum = getNumCh(char, firstRow);
  const secondNum = getNumCh(char, secondRow);
  if (firstNum > secondNum) {
    return firstRow;
  } else if (firstNum === secondNum) {
    else if (firstNum === secondNum) {
        return `${firstRow} 
        ${secondRow}`;
  } else return secondRow;
}

console.log(getRow(firstRow, secondRow));
