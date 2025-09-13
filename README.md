# Find Largest Number in Array

A simple JavaScript program that finds the largest number in an array with comprehensive error handling and testing.

## Function Description

### `findLargestNumber(arr)`

Finds and returns the largest number in an array.

**Parameters:**
- `arr` (Array): An array of numbers

**Returns:**
- `number`: The largest number in the array

**Throws:**
- `Error`: If input is not an array
- `Error`: If array is empty
- `Error`: If array contains non-numeric values

## Usage

```javascript
const findLargestNumber = require('./findLargest');

// Basic usage
const numbers = [3, 7, 2, 9, 1];
const largest = findLargestNumber(numbers);
console.log(largest); // Output: 9

// Works with negative numbers
const negatives = [-5, -2, -8, -1];
console.log(findLargestNumber(negatives)); // Output: -1

// Works with decimals
const decimals = [3.14, 2.71, 1.41];
console.log(findLargestNumber(decimals)); // Output: 3.14
```

## Testing

The program includes comprehensive test cases covering:
- Positive numbers
- Negative numbers
- Mixed positive and negative numbers
- Single element arrays
- Decimal numbers
- Arrays with duplicate values
- Error handling for invalid inputs

To run the tests:

```bash
node findLargest.js
```

## Implementation Details

The function uses `Math.max()` with the spread operator for efficient computation and includes robust input validation to ensure reliable operation with various edge cases.