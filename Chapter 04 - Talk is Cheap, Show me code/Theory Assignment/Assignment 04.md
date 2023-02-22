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
1.Nesting fragments is not allowed in React because a fragment is a way to group multiple children elements without adding extra nodes to the DOM.<br/>
2.When you nest fragments, you end up with a tree of fragments, which goes against the purpose of using fragments to avoid creating extra nodes in the DOM.<br/>
3.In other words, fragments are meant to be used as a container for multiple elements, but they are not meant to be nested because they don't represent a real DOM node. When you nest fragments, you're essentially creating unnecessary complexity in your code, which can make it harder to read and maintain.<br/>
4.Instead of nesting fragments, you can use other techniques to group multiple elements in a component, such as using a higher-order component or a custom component that wraps the nested elements. <br/>
5.Alternatively, you can use an array to represent the nested elements and then map over the array to render them.<br/>
6.Overall, while nesting fragments might seem like a convenient way to group elements, it goes against the purpose of fragments, and it's better to use alternative techniques to group multiple elements in a component.<br/>
