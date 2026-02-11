# Primitive Types

## Writing functions for values of primitive types

## Before we start
1. This practical task will be verified automatically with tests. 
2. Please put all `JavaScript` code in the `src/script.js` file and `HTML` code in the `src/index.html` file. Functions from `src/script.js` are used in the `<script>` inside `src/index.html`. If you use any other file, it cannot be verified.
3. Please don't change the page structure if this is not required. It may affect the tests.

## Development
While developing, you can open `src/index.html` in your browser to check your task as you go. However, we have prepared a more convenient way to run it locally. You can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/LocalDevelopment.md).

## Run JavaScript code in RunJS application
`RunJS` is a JavaScript and TypeScript playground for desktop operating systems. It runs code as it's written and displays formatted results in the output panel on the right.

![RunJS application in work](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/images/runjs-intro.png)

RunJS is available on macOS, Windows, and Linux operating systems.

Here are detailed instructions on installing and using it: [RunJS documentation](https://runjs.app/docs).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally, but this will require some local setup. You can find the instructions here: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/VerifySolutionLocally.md).

## Task Requirements
Write functions for working with values of primitive types. You will find all the requirements for these functions below.
Please note that you should edit the `src/script.js` file. Your solution cannot be verified if you use a different file.
To create functions, you must use `Function Declaration`, or we will not be able to verify them. You can find the instructions for using `Function Declaration` here: [javascript.info: Function Declaration](https://javascript.info/function-basics#function-declaration).

**Note:**
- If a task requirement says *Function should **return** something*, it should deliberately return the expected value. If you show it in the console instead of returning a value, it will not pass verification. For more about returning the value of a function: [Returning a value](https://javascript.info/function-basics#returning-a-value).


### Requirements for the functions

1. **Function "isValid"**

Write the function `isValid` to verify a user's name on a website.

```js
function isValid(name) {
    // your code...
}
```

This function takes one parameter — `name`, a string with the user's name — and returns `true` or `false`.
1. The function should return `true` (a `boolean` value) if the user's name doesn't contain spaces.
2. Otherwise, `isValid` should return  `false`.

**Example of using the function:**
```js
isValid('Stan Lee'); // false: name has space inside
isValid('Robert'); // true: name doesn't have spaces inside
```
2. **Function "countChars"**

Write the function `countChars` to count characters in a string, but without spaces at the beginning and the end.
```js
function countChars(str) {
    // your code...
}
```

This function takes one parameter,`str`, a string for counting characters.
1. The function should return several characters in the passed string `str`.
2. It should not count spaces at the string's beginning and end.
3. If the string consists only of spaces, `countChars` should return `0`.

**Example of using the function:**
```js
countChars('        '); // 0, string consists of spaces only
countChars('Teodor'); // 6, string consists of 6 characters
countChars('   Sam     '); // 3, we count everything except spaces
```
3. **Function "sum"** 

Write the function `sum`, which returns the result of summing two numbers.
```js
function sum(a, b) {
    // your code...
}
```
This function takes two parameters:
`a` — any number as a string,
`b` — any number as a string.
1. The function should return the sum of the two passed parameters.
2. The parameters are of the `string` type, so they must be converted to numbers before summing.

**Example of using the function:**
```js
sum('5', '7'); // 12, a sum of two values
```

4. **Function "formatMoney"**

Write the function `formatMoney`, which takes a number and returns a formatted string value similar to `$100.00`.
```js
function formatMoney(amount) {
    // your code...
}
```

This function takes one parameter, `amount`, an amount of money for formatting.
1. The function should work with both integers and fractions.
2. In the resulting string, there should always be two characters after the dot. To round up to two characters, use the special method available for numbers `toFixed(2)`. You can read more about this here: [toFixed MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed).

**Example of using the function:**
```js
formatMoney(100); // "$100.00"
formatMoney(100.889); // "$100.89"
```
5. **Function "convertToBoolean"**

Write the function `convertToBoolean`, which should take any value of a primitive type and convert it to `boolean`.
```js
function convertToBoolean(value) {
    // your code...
}
```
This function takes one parameter: `value` — any value of the `number`, `string`, `boolean`, `null`, or `undefined` type.
This function should convert `value` to the `boolean` type.

**Example of using the function:**
```js
convertToBoolean(100); // true
convertToBoolean(true); // true
convertToBoolean('Some cool string'); // true
convertToBoolean(null); // false
convertToBoolean(undefined); // false
```
