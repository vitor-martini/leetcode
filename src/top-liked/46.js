//https://leetcode.com/problems/permutations/description/
const numbers = [1, 2, 3]
var permute = function(numbers) {
  const result = []
  dfs(numbers, new Set(), result)
  return result
}

function dfs(numbers, currentSet, result) {
  if(currentSet.size === numbers.length) {
    result.push(Array.from(currentSet))
    return
  }

  for(let i = 0; i < numbers.length; i++) {
    if (currentSet.has(numbers[i])) {
      continue
    }

    currentSet.add(numbers[i])
    dfs(numbers, currentSet, result)
    currentSet.delete(numbers[i])
  }
}

console.log(permute(numbers))