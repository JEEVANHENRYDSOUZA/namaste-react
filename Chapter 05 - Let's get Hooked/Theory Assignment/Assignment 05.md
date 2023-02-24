- ### What is the difference between NAMED export vs DEFAULT export vs * as <br/>
sol: <br/>
### ```Named Export```
1. Named exports are a feature in JavaScript that allow you to export multiple values from a module using explicit names, rather than exporting them all as part of a default export.<br/>
2. To create a named ```export```, you simply add the export keyword in front of the variable, function or class declaration that you want to export. <br/>
Here's an example : <br/>
```
// file: myModule.js

export const myVar = "Hello";
export function myFunc() {
  console.log("World!");
}
```

```
import {myVar,myFunc} from myModule.js
```
3. In this example, we are exporting a constant ```myVar``` and a ```function myFunc ``` using the export keyword. We can now import these values into another module using their explicit names <r/>

### ``` Default Export ```
1. We can also export variables, functions or classes using the export default syntax. <br/>
2. This allows you to export a single value as the default export for a module, which can then be imported without using explicit names. <br/>
``` 

const myVar = "Hello";
function myFunc() {
  console.log("World!");
}

export default myVar;
```
```
// file: main.js
import myVar from "./myModule.js";
console.log(myVar); // "Hello"
myFunc(); // "World!"

```

### ```Asterisk Export```
1. The asterisk (*) export is a feature in JavaScript that allows you to export all the values from a module using a single object.<br/>
Example:
```
export const myVar1 = "Hello";
export function myFunc1() {
  console.log("World!");
}
export const myVar2 = 42;
```
```
// file: myOtherModule.js
export * from "./myModule.js";
```
- ### Two way vs  Unidirectional / One Way Data Binding
sol: <br/>
1. In a standard HTML environment, the ``` input tag ``` has two-way data binding, which means that changes to the value of the ``` input tag ``` are automatically reflected in the UI, and vice versa.<br/>
2. Two-way data binding is a concept in web development where the values of the UI elements and the data model are automatically synchronized. This means that when the user updates the value of the UI element, the data model is automatically updated, and when the data model changes, the UI is automatically updated to reflect the new data.<br/>
3. In React, on the other hand, the value of the input tag is controlled by the state of the component, and changes to the value are not automatically reflected in the UI. Instead, you need to explicitly update the state of the component to update the value of the input tag.<br/>
4. React's approach to handling user input with controlled components has some advantages over the two-way data binding approach. For example, it makes it easier to validate and sanitize user input, and it ensures that the state of the component always reflects the current value of the ```input tag```, even if the value is changed by some other means (such as a script or an external library). However, it may require more code to handle user input compared to the two-way data binding approach used in traditional HTML.<br/>

- ### Why do we need useState
sol: <br/>
### ``` States in React```
1. In React, state is an object that represents the current state of a component. It is an internal data store that allows a component to manage its data, and it can be used to store and manipulate data that affects the component's rendering.<br/>
2. State in React is a fundamental concept and is used to handle changes in a component's data over time. For example, when a user interacts with a component, such as by clicking a button or entering data into a form, the component can update its state to reflect the new data. When the state changes, React will automatically re-render the component to reflect the updated state.<br/>
3.
### ```Adding State In React```
1. State is typically defined in a component using the useState hook, and it can be updated using the setState method. <br/>
2. The useState hook returns an array with two values: the current state value and a function to update the state. <br/>
3. The setState method is used to update the state by passing in a new value for the state object.<br/>
- ### What are HOOKS in react
sol: <br/>
1. Hooks are functions that provide a way to use React features in functional components, such as state management, lifecycle methods, and context. Hooks are named with a "use" prefix, such as useState, useEffect, and useContext. <br/>

- ### What is config.js
sol: <br/>
1. In a React application, you can use a config.js file to store settings that are specific to your application, such as the URL for your API or the name of your application. <br/>
2. You can use this file to define environment-specific settings as well, such as different API endpoints for development and production. <br/>
