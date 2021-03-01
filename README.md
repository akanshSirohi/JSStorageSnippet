# JSStorageSnippet
Simple JavaScript localstorage helper function.

Set and get objects or string to browser's localstorage

- If only key is passed then it grab data from localstorage.
- If both key and value passed then it stores data in localstorage.
- Use `JSON.parse()` to convert JSON string stored in localstorage into object.
- Use `JSON.stringify()` to convert object into JSON string to store in localstorage.
- Use `window.localstorage.setItem()` & `window.localstorage.getItem()` to deal with localstorage.
- Use `typeof` to detect if given value is object or not.

## Usage
```js
storage("myKey", { key1: "MyValue_1", key2: "MyValue_2" }); // true if supported, false if not supported
storage("myKey"); // Object { key1: "MyValue_1", key2: "MyValue_2" }
```
