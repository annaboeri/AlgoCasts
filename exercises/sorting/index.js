// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
//                 Worst case runtime |  difficulty
// BubbleSort:            n^2               easiest
// SelectionSort:         n^2               easier
// MergeSort:             n*log(n)          medium
// BubbleSort and SelectionSort only ok with small amount of data (~100 records)

function bubbleSort(arr) {
  // Find the largest element of the array and drag it over
  // to the right side of the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - 1 - i); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  // Assume the element at i is the least in the array and assign to indexofMin
  // See if there is an element with a lower value
  // If there is, record its index as indexOfMin
  // if the index of the current element and the index of the lowest element are not the same
  // swap them
  // aka "prove me wrong" algorithm
  for (let i = 0; i < arr.length; i++) {
    let indexofMin = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexofMin]) {
        indexofMin = j
      }
    }
    if (i !== indexofMin) {
      let min = arr[indexofMin];
      arr[indexofMin] = arr[i];
      arr[i] = min;
    }
  }
  return arr;
}

function mergeSort(arr) {
  // split the array into two then split those halves
  // continue until array is size one / can't split anymore

  // base case:
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center); // arr from index 0 up to * but not including * center
  const right = arr.slice(center); // take everything from center to end of array

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // --> takes 2 sorted arrays and merges them into 1 array
  // Create empty results arr
  // While there are elements in both arrays
  // If the first element of the left hals is less than first in right half
  // shift the element from left into result array
  // else shift the element from right into results arr
  // tale everything from the array that still has studd in it and put in in results arr
 const results = [];
 while(left.length && right.length) {
   if (left[0] < right[0]) {
     results.push(left.shift());
   } else {
     results.push(right.shift());
   }
 }
 return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
