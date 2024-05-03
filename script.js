const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    if (currentSum + currentNum <= n) {
      currentSubarray.push(currentNum);
      currentSum += currentNum;
    } else {
      result.push(currentSubarray);
      currentSubarray = [currentNum];
      currentSum = currentNum;
    }
  }

  // Push the remaining subarray if it's not empty
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
