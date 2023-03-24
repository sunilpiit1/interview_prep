# LIFECYCLE METHODS OF REACT COMPONENT

Just like a normal human being react component also has a lifecycle and you can decide in your component, what to do during during a certain lifecycle point using the react lifecycle methods.

Mainly there are three phases of lifecycle of a component -

1. Initial-rendering or say mounting
2. Updating
3. Unmounting

## DIFFERENT LIFECYCLE METHODS

Whenever you invoke a component for the first time, So creation of the react element actually starts here

First the constructor function gets called which do all the initialization, after that a lifecycle method gets called named as getDerivedStateFromProps (static method), it is used to initialize your state using props passes (I don't recommend using it). After that render function gets called which actually uses all the defined configs (state and props) and returns you the JSX (or i should say the html for the ui). Then this element gets mounted in the dom for the first time and componentDidMount method gets called.

When you change configs of a element (like state or props) that component becomes dirty and the function getDeprivedStateFromProps get called (another static method), after that componentShouldUpdate gets called which actually decides whether to call the render method or not, if true render method gets called, react create the new virtual dom from scratch after that componentDidUpdate gets called and after that react hand over the updates to react-dom, react-dom make updates of the following and then componentDidUnmount gets called.

### WHY COMPONENTDIDMOUNT TO FETCH DATA ?

The componentDidMount method is a great place to request data from the server since even though setting the state will cause a second render, it happens before the browser updates the screen. The user will not see the intermediate state.

[A Nice Article]("https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d")

https://medium.com/habilelabs/what-are-component-lifecycle-methods-in-react-js-5269aaa37046
