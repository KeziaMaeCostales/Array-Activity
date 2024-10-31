// 1. Use concat() to join two arrays: arr1 and arr2
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log("Concatenated Array:", combinedArr); 

// 2. Use push() to add "Kiwi" to the fruits array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Array after push:", fruits);

// 3. Use unshift() to add 4 and 5 to the beginning of array1
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array after unshift:", array1); 

// 4. Use pop() to remove the last element from the fruits array
fruits.pop();
console.log("Array after pop:", fruits); 

// 5. Use shift() to remove the first element from array2
const array2 = [1, 2, 3];
array2.shift();
console.log("Array after shift:", array2); 

// 6. Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("Sorted fruits array:", fruits); 

// 7. Use slice() to create a new array containing a portion of the fruits array
const slicedFruits = fruits.slice(1, 3); 
console.log("Sliced fruits array:", slicedFruits); 

// 8. Use splice() to insert and remove elements in the months array
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); 
console.log("Months after insertion:", months); 

months.splice(4, 1, "May"); 
console.log("Months after replacement:", months);
