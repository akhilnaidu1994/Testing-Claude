function findLargestNumber(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    if (arr.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    if (arr.some(item => typeof item !== 'number')) {
        throw new Error('Array must contain only valid numbers');
    }
    
    return Math.max(...arr);
}

function runTests() {
    console.log('Running tests for findLargestNumber...\n');
    
    const tests = [
        {
            name: 'Test 1: Positive numbers',
            input: [3, 7, 2, 9, 1],
            expected: 9
        },
        {
            name: 'Test 2: Negative numbers',
            input: [-5, -2, -8, -1],
            expected: -1
        },
        {
            name: 'Test 3: Mixed positive and negative',
            input: [-3, 5, -1, 8, 0],
            expected: 8
        },
        {
            name: 'Test 4: Single element',
            input: [42],
            expected: 42
        },
        {
            name: 'Test 5: Decimals',
            input: [3.14, 2.71, 1.41, 1.73],
            expected: 3.14
        },
        {
            name: 'Test 6: Duplicates with largest',
            input: [5, 5, 3, 5, 1],
            expected: 5
        }
    ];
    
    let passed = 0;
    let failed = 0;
    
    tests.forEach(test => {
        try {
            const result = findLargestNumber(test.input);
            if (result === test.expected) {
                console.log(`✓ ${test.name}: PASSED`);
                passed++;
            } else {
                console.log(`✗ ${test.name}: FAILED - Expected ${test.expected}, got ${result}`);
                failed++;
            }
        } catch (error) {
            console.log(`✗ ${test.name}: ERROR - ${error.message}`);
            failed++;
        }
    });
    
    console.log('\nError handling tests:');
    
    const errorTests = [
        {
            name: 'Empty array',
            input: [],
            expectedError: 'Array cannot be empty'
        },
        {
            name: 'Non-array input',
            input: 'not an array',
            expectedError: 'Input must be an array'
        },
        {
            name: 'Array with non-numbers',
            input: [1, 'hello', 3],
            expectedError: 'Array must contain only valid numbers'
        }
    ];
    
    errorTests.forEach(test => {
        try {
            findLargestNumber(test.input);
            console.log(`✗ ${test.name}: FAILED - Should have thrown an error`);
            failed++;
        } catch (error) {
            if (error.message === test.expectedError) {
                console.log(`✓ ${test.name}: PASSED`);
                passed++;
            } else {
                console.log(`✗ ${test.name}: FAILED - Expected "${test.expectedError}", got "${error.message}"`);
                failed++;
            }
        }
    });
    
    console.log(`\nTest Results: ${passed} passed, ${failed} failed`);
}

if (require.main === module) {
    runTests();
}

module.exports = findLargestNumber;