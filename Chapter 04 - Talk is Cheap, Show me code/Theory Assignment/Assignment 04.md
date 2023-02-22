- ### Is JSX mandatory for React? <br/>
sol: No, JSX is not mandatory we can achieve the same thing using JavaScript.Internally JSX uses React.createElement to create react object which is in turn rendered using the virtual React DOM <br/>
- ### is ES6 mandatory for React? <br/>
sol: No ES6 is not mandatory fro React
-### ```{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}``` in JSX.
sol : <br/>
1. ```{}``` when use this we are indicating that we are writing JavaScript.```{TitleComponent}``` indicates that TitleComponent is JavaScript.It can represent anything depending on how javaScript is used.<br/>
2. ```{<TitleComponent />}``` represents JSX.<br/>
3. ```{<TitleComponent></TitleComponent>}``` represents normal tags.<br/>
- ### What is reconcilation Algorithm? <br/>
sol: <br/>
1.The “reconciliation” algorithm in React is how the decision to re-render the component is made. In the browser, DOM manipulation is expensive and time consuming, both in mounting and unmounting. Part of what makes React very performant is its reconciliation algorithm.<br/>
2.In short, it watches closely for differences, and only updates the DOM when necessary and tries to update only the parts which need to be changed.<br/>
- ### Why do we need keys in react ? <br/>
sol:<br/>
1. React uses the reconcilation Algorithm  in the background.<br/>
2. When have similar items example: <br/>

 ```
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

It becomes difficult for react to understand which item has changed and only those items should be re-rendered.<br/>
Hence we use keys as unique identification to the elements.<br/>
- ### React.fragment vs ```<></>```
sol: <br/>
1.<> is the shorthand tag for React.Fragment which allows us to group a list of elements without wrapping them in a new node.<br/>
```
render() {
    return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
}
```
3.The only difference between them is that the shorthand version does not support the key attribute.<br/>
- ### Why nesting fragments is not allowed in react 
sol: <br/>
1. Nesting fragments is not allowed in React because a fragment is a way to group multiple children elements without adding extra nodes to the DOM.<br/>
2. When you nest fragments, you end up with a tree of fragments, which goes against the purpose of using fragments to avoid creating extra nodes in the DOM.<br/>
3. In other words, fragments are meant to be used as a container for multiple elements, but they are not meant to be nested because they don't represent a real DOM node. When you nest fragments, you're essentially creating unnecessary complexity in your code, which can make it harder to read and maintain.<br/>
4. Instead of nesting fragments, you can use other techniques to group multiple elements in a component, such as using a higher-order component or a custom component that wraps the nested elements. <br/>
5. Alternatively, you can use an array to represent the nested elements and then map over the array to render them.<br/>
6. Overall, while nesting fragments might seem like a convenient way to group elements, it goes against the purpose of fragments, and it's better to use alternative techniques to group multiple elements in a component.<br/>
- ### What is Config Driven UI
sol:
1. A configuration-driven UI is a user interface that is designed and generated based on a configuration or settings file, rather than being hand-coded. In this approach, the layout and functionality of the UI is determined by a configuration file or some kind of data structure, which allows developers to easily modify or customize the UI without having to modify the underlying code.<br/>
2. The idea behind a configuration-driven UI is to make it easier to create and maintain user interfaces, particularly for complex applications that have many different screens and user interactions. By separating the UI design from the code, it is possible to create more flexible and dynamic interfaces that can be easily customized and adapted to different use cases. <br/>

3. Some of the benefits of a configuration-driven UI include: <br/>

 - Easier customization: developers can modify the UI by simply changing the configuration file, without having to modify the code.<br/>
 - Faster development: since the UI is generated automatically based on the configuration file, developers can create new UIs more quickly and with fewer errors.<br/>
 -  Greater consistency: by using a common set of configuration settings, it is possible to ensure that the UI is consistent across different screens and applications.<br/>
  - Better separation of concerns: separating the UI design from the code makes it easier to manage changes and updates to the UI separately from the underlying functionality.<br/>
4.  Overall, a configuration-driven UI can be a powerful tool for creating more flexible, adaptable, and maintainable user interface <br/>
- ### What are props
sol: <br/>
1. Props is the shorthand for properties.<br/>
2. Functional Components are nothing but JavaScript functions.<br/>
3. When we pass parameters to function then it is called as props or properties. <br/>
- ### What is Virtual Dom
sol: <br/>
1. In React, the virtual DOM is a lightweight representation of the actual DOM, which allows React to efficiently update and render components. When a React component is rendered, it creates a virtual DOM tree in memory that represents the structure of the actual DOM. The virtual DOM tree is a plain JavaScript object that describes the components, their attributes, and their relationships.<br/>

2. When the state or props of a component change, React compares the new virtual DOM tree with the previous one to identify the differences, or "diffs". It then generates a minimal set of changes to update the actual DOM to match the new virtual DOM. By only updating the necessary parts of the DOM, React minimizes the number of expensive DOM operations, such as reflows and repaints, which can improve the performance of the application.<br/>`

3. The use of the virtual DOM in React is one of the key reasons for its popularity and success. It provides a fast and efficient way to update the UI, which is especially important for large and complex applications with many dynamic components. It also allows for a more declarative programming style, where the developer specifies what the UI should look like, rather than how to update it, which can make the code more readable and easier to maintain.<br/>
