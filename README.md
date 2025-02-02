# TDD Workshop with Node.js

This workshop is designed to teach Test-Driven Development (TDD) fundamentals using Node.js. Through progressive exercises, you'll learn how to write tests first and implement code that satisfies those tests.

## Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## Setup Instructions

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npm test
   ```
   For development with auto-reload:
   ```bash
   npm run test:watch
   ```

## Workshop Structure

The workshop is divided into three levels of increasing complexity:

### 1. Basics (Start Here)
Located in `src/exercises/01-basics`
- Calculator class implementation
- Learn basic test structure
- Practice with simple arithmetic operations

### 2. Intermediate
Located in `src/exercises/02-intermediate`
- String manipulation utilities
- Working with collections
- More complex test scenarios

### 3. Advanced
Located in `src/exercises/03-advanced`
- User service with async operations
- Mocking dependencies
- Error handling

## How to Do the Exercises

1. Start with the basics folder
2. Read the test file first (e.g., `calculator.test.ts`)
3. Write code in the implementation file (e.g., `calculator.ts`) to make tests pass
4. Run tests with `npm test` to check your progress
5. Move to the next exercise when all tests pass

### TDD Cycle
Follow these steps for each exercise:
1. Read the test to understand the requirement
2. Run the test (it will fail)
3. Write minimal code to make the test pass
4. Refactor if needed
5. Repeat for the next test

## Exercise Details

### 1. Calculator (Basics)
Implement basic arithmetic operations:
- Addition
- Subtraction
- Multiplication
- Division (with error handling)

Expected learning outcomes:
- Understanding test structure with describe/it blocks
- Basic assertions with expect()
- Error handling testing
- Working with simple functions

### 2. String Utilities (Intermediate)
Implement string manipulation functions:
- String reversal
- Word counting
- Palindrome checking
- Text truncation

Expected learning outcomes:
- Working with strings and arrays
- More complex test cases
- Edge case handling
- Data structure manipulation (Map)

### 3. User Service (Advanced)
Implement a user management service with:
- CRUD operations
- Async/await
- Error handling
- Data validation

Expected learning outcomes:
- Testing asynchronous code
- Mocking with Jest
- Dependency injection
- Error handling in async context

## Solutions

Reference solutions are available in the `src/solutions` directory, but try to solve the exercises yourself first!

## Tips
- Write the minimum code needed to make tests pass
- Refactor only after tests are green
- Don't peek at solutions until you've tried solving the exercise
- If stuck, read the test file carefully - it contains clues about the implementation
- Use TypeScript's type system to your advantage
- Remember to handle edge cases mentioned in the tests

## Test Commands Explained

- `npm test`: Runs all tests once and shows coverage report
- `npm run test:watch`: Runs tests in watch mode, automatically re-running when files change
- Use `npm test src/exercises/01-basics` to run specific test suites

## Understanding Test Output

When you run the tests, you'll see output like this:
```
PASS src/exercises/01-basics/calculator.test.ts
FAIL src/exercises/02-intermediate/stringUtils.test.ts
```

- ✅ PASS means all tests in that file passed
- ❌ FAIL shows which tests failed and why
- The coverage report shows which lines of code were tested

Happy coding and remember: the key to TDD is writing tests first! 🚀