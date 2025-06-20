
This is compiled from <www.freecodecamp.org/news/javascript-promise-object-explained/>

**Promise object represents a “pending state” in the most common sense: the promise will eventually be fulfilled at a later date.**

Promise() is like an automated request from a bank when you try to transfer money online. It has resolve() and reject() are methods.
resolve() is like a positive automated response while reject is like a negative response message.

Depending on the result of the Promise, either the resolve() or the reject() function will be called to end the pending state.

To handle the Promise object, you need to chain the function call with the then() and catch() functions. The resolve() function corresponds to the then() function, while reject() corresponds to the catch() function

A typical promise implementation is as follows:
```javascript
let p = new Promise((resolve, reject) => {
  let isTrue = true;
  if (isTrue) {
    resolve('Promise resolved');
  } else {
    reject('Promise rejected');
  }
});

p
.then(message => console.log(`Promise resolved: ${message}`))
.catch(message => console.log(`Promise rejected: ${message}`));
```