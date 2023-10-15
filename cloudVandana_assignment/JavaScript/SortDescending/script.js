// Array to be sorted
const arr = [10, 23, 54, 78, 99, 34, 54];
// Sorting the Array is Descending order Using sort() and Comapare function
arr.sort((a, b) => {
    if(a < b) {
        return 1;
    }
    else if(a > b) {
        return -1;
    }
    else {
        return 0;
    }
});
// Logging arr value to the console.
console.log(arr)