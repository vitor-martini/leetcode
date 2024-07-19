//https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/

const matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
const m = matrix.length
const n = matrix[0].length
let min;
let max;

const minNumbers = []
for (let i = 0; i < m; i++) {
  min = matrix[i][0]
  for (let j = 0; j < n; j++) {
    if(matrix[i][j] < min) {
      min = matrix[i][j]
    }
  }
  minNumbers.push(min)
}

const maxNumbers = []
for (let j = 0; j < n; j++) {
  max = matrix[0][j]
  for (let i = 0; i < m; i++) {
    if(matrix[i][j] > max) {
      max = matrix[i][j]
    }
  }
  maxNumbers.push(max)
}

const luckyNumbers = minNumbers.filter(num => maxNumbers.includes(num));