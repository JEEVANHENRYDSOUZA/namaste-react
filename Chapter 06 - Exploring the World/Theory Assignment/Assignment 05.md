- ### What is microservices
sol: <br/>
1. Microservices is an architectural style for building software applications as a collection of loosely coupled, independently deployable, and scalable services.<br/>
2. Each microservice is designed to perform a single specific business function and can communicate with other microservices through lightweight protocols.<br/>
3. The buiggest advantage is we can use different language for different component.<br/>

- ### What is Monolith Architecture <br/>
sol: <br/>
1. Monolith architecture is basically having everything in a single code file. <br/>
2. Mono means one single <br/>

- ### UseEffect Hook
sol: <br/>
### ``` Why use useEffect ```
1. The``` useEffect ``` hook is a built-in hook in React that allows you to perform side effects in your functional components. <br/>
2. Side effects are actions that affect the outside world, such as fetching data from a server, updating the DOM, or setting up event listeners.<br/>
### ``` Details About useEffect ```
1. The ```useEffect``` hook takes two arguments: a function that performs the side effect, and an optional array of dependencies.<br/>
2.  The function will be executed after every render cycle of the component, and the dependencies determine when the function should be called.<br/>
3.  If the dependency array is empty, the function will only be called once after the component is mounted. <br/>
4.  If the dependency array contains one or more values, the function will be called every time any of the dependencies change. <br/>
5.  If no dependency empty array or no dependecy array with elements is passed as the second argument then the ``` useEffect ``` Hook is called on each render.<br/>
 
example:
```
import { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return <ul>{data.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}
```
- ### What is Access Control Allow Origin <br/>
sol: <br/>
1. Access-Control-Allow-Origin is a security feature implemented by web browsers to protect users from cross-site scripting (XSS) attacks. <br/>
2. It is an HTTP header that is returned by a server to indicate which origins are allowed to access a resource. <br/>
3. Access-Control-Allow-Origin is a security feature implemented by web browsers to protect users from cross-site scripting (XSS) attacks. <br/>
4. It is an HTTP header that is returned by a server to indicate which origins are allowed to access a resource.<br/>
5. When a browser requests a resource from a different domain, the server can include an Access-Control-Allow-Origin header in the response to indicate which domains are allowed to access the resource.<br/>
6. If the requesting domain is not included in the header, the browser will block the response from being loaded, preventing the XSS attack.<br/>
- ### What is conditional Rendering
sol: <br/>
1. Conditional rendering is the process of conditionally rendering different parts of a user interface (UI) based on certain conditions.<br/>
2.  In web development, conditional rendering is typically used to show or hide UI elements based on user actions or certain states of the application.<br/>
- ### What is Shimmer UI <br/>
sol: <br/>
1. A shimmer screen is a version of the UI that doesn’t contain actual content. Instead, it mimics the page’s layout by showing its elements in a shape similar to the actual content as it is loading and becoming available (i.e. when network latency allows).<br/>
2. A shimmer screen is essentially a wireframe of the page, with placeholder boxes for text and images. <br/>
- ### What is Conditional Chaining <br/>
sol: <br/>
1. Conditional chaining is a feature introduced in ECMAScript 2020 (also known as ES2020) that allows developers to safely access deeply nested properties and methods of an object without throwing an error if any of the intermediate properties or methods are null or undefined. 
2. The conditional chaining syntax uses the question mark (?) to indicate that a property or method is optional and may be null or undefined.<br/>
example:
``` 
const user = {
  name: 'John Doe',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

// Accessing a deeply nested property without conditional chaining
const state = user.address.state; // throws an error if user or address is null or undefined

// Accessing a deeply nested property with conditional chaining
const state = user?.address?.state; // safely returns undefined if user or address is null or undefined
``` 
- ### JavaScript Expression vs statements
sol: <br/>
## ``` JavaScript Expression```
1.  In JavaScript, an expression is a piece of code that returns a value. 
2.  Expressions can be used in many places where a value is expected, such as variable assignments, function arguments, and conditional statements.
example:
```
// A string literal expression
const message = 'Hello, world!';

// A numeric literal expression
const x = 42;

// A variable reference expression
const y = x + 10;

// An arithmetic expression
const z = (x + y) * 2;

// A function call expression
const result = Math.max(10, 20, 30);
```
## ``` JavaScript Statement ```
1. JavaScript also has statements, which perform an action but do not return a value. <br/>
2. For example, the ```if statement``` and the ```for statement ```are both statements that perform a control flow action but do not return a value.<br/>

- ### What is   ``` aysnc``` and ``` await```
sol: <br/>
## ```async```
1. ```async``` indicates that the function will return a promise.<br/>
2.  In JavaScript, the async keyword is used to define a function that returns a promise.<br/> 
3.  An async function is essentially a function that performs some asynchronous operation and then returns a promise that resolves to the result of that operation.<br/>
## ```await```
1.  The await keyword is used inside an async function to wait for the result of a promise before continuing execution.<br/>
2.  Statements written below await will not be executed until we get the result of the promise.<br/>
example:
```
async function fetchData() {
  const response = await fetch('https://example.com/data');
  const data = await response.json();
  return data;
}
```
- ### What is the use of ```await response.json()``` <br/>
sol: <br/>
1. When we first do a fetch call what is returned back to us is a promise and not data which when resolved gives stream of bytes. <br/>
2. We dont want bytes instead we want the actual json data hence we do that.<br/>
