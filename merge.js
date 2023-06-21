function mergeSort(arr) {
  console.log("Starting: " + arr)
  //allocate left and right
  let left = [];
  let right = [];
  let half = Math.floor(arr.length / 2);
  let sorted = [];

  //split it up
  if (arr.length > 1) {
    console.log("Splitting")
    left = arr.slice(0, half);
    right = arr.slice(half);
    console.log("Left is " + left)
    console.log("Right is " + right);
    sorted = merge(mergeSort(left), mergeSort(right));
  }
  else{
    sorted = arr;
  }

  console.log("Sorted is: "+sorted);
  return sorted;
}

function merge2(left, right){
  return left;
}

function merge(left, right) {
  console.log("merging");
  console.log("Merge left = " + left);
  console.log("Merge right = " + right);
  let merged = [];
  let leftIter = 0;
  let rightIter = 0;

  while(leftIter < (left.length) && rightIter < (right.length)){
    console.log("~~~~~~~~~While Loop Step~~~~~~~~~")
    console.log("Comparing " + left[leftIter] + " & " + right[rightIter])
    if (left[leftIter] <= right[rightIter]) {merged.push(left[leftIter]); leftIter++; console.log("Left has incremented to " + leftIter + " index. Left is " + left)}
    else                                    {merged.push(right[rightIter]); rightIter++; console.log("Right has incremented to " + rightIter + " index. Right is " + right)}
    console.log("Loop done merged is now: " + merged)
    console.log("~~~~~~~~~ENDING Loop Step~~~~~~~~~")
  }

  //After the looping is done, you may be left with the remains of either array
  //Push the rest of it
  while(leftIter < left.length){
    console.log("Left still has some. Merging")
    merged.push(left[leftIter]);
    leftIter++;
  }

  while(rightIter < right.length){
    console.log("Right still has some. Merging")
    merged.push(right[rightIter]);
    rightIter++;
  }

  console.log("Final merged is: " + merged);
  return merged;
}



let array = [1, 2, 3, 5, 10, 29, 27, 39, 3, 4, 5, 9];
console.log("Hello world~!")
mergeSort(array);
