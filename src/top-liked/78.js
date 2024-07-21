const numbers = [1,2,3]

var subsets = function(numbers) {
	let result = []                 
	let currentSet = []
  let i = 0;
    
    function search(numbers, i, currentSet){
        if (i == numbers.length) { 
          result.push(currentSet);
          return 
        } 
        search(numbers, i+1, [...currentSet, numbers[i] ] )
        search(numbers, i+1, currentSet)
    }
    
    search(numbers,i,currentSet) 
    return result        
};

console.log(subsets(numbers))

// Start: []
  // Include 1: [1]
    // Include 2: [1, 2]
      // Include 3: [1, 2, 3]
      // Do not include 3: [1, 2]
    // Do not include 2: [1]
      // Include 3: [1, 3]
      // Do not include 3: [1]
  // Do not include 1: []
    // Include 2: [2]
      // Include 3: [2, 3]
      // Do not include 3: [2]
    // Do not include 2: []
      // Include 3: [3]
      // Do not include 3: []
