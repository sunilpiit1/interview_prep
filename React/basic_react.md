# REACT

React is JS library to build user interfaces.

React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer.

## WHY REACT?

1. It has a component based architecture, which allows you to write reusable piece od code which represents a ui tile basically.

2. In React component you declare only how you ui should look like a particular state, rest dom-related things are handled by react itself.

3. Third and most of all it's library not a framework, requires less setup or things to remember while coding. With basic knowledge of JS you can start with it.

4. Selective rendering, when any update happens React updates only whatever is required, this gives a high performance boost to React.

5. Supports server-side-rendering.

6. Big community support.

[Give it a read]("https://www.simplilearn.com/tutorials/reactjs-tutorial/what-is-reactjs").

## COMPONENTS

Components are standalone independent blueprint piece of ui, that describes a specific piece in the, they are re-usable which makes them very useful.

Components only describes react that how the ui should look for particular state and prop variables, rest dom-manipulation is done by react and react-som.

Components are basically functions that taken in props and return you some JSX to render on the ui. Component actually returns you this element (an object structure), which contains a lot of things about your piece.

## REACT-ELEMENT

In React, this is where the elements come to rescue. An element is a plain object describing a component instance or DOM node and its desired properties. It contains only information about the component type (for example, a Button), its properties (for example, its color), and any child elements inside it.

An element is not an actual instance. Rather, it is a way to tell React what you want to see on the screen. You can’t call any methods on the element. It’s just an immutable description object with two fields: type: (string | ReactClass) and props: Object

[More on Components and Elements]("https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html")

## REACT-APPS

React apps are apps that are created using react, these projects are not completely made using react but react just a part of these project. Multiple other libraries also contribute to a react project, like

- react-dom for optimized dom manipulations.
- react-router-dom for internal routing
- babel for transpiling modern JS and JSX
- webpack for module bundling
- react-redux for connecting react app to redux store. any many more...

## WHAT IS JSX?

JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code. This makes the code easier to understand and debug, as it avoids the usage of complex JavaScript DOM structures.

Behind the scenes babel does the transpiling for us, it actually transpiles the JSX to react functions (which is normal JS). Babel preset for react does all these transpiling for react.

## VIRTUAL DOM

React keeps a lightweight representation of the “real” DOM in the memory, and that is known as the “virtual” DOM (VDOM). Manipulating real DOM is much slower than manipulating VDOM because nothing gets drawn on the screen. When the state of an object changes, VDOM changes only that object in the real DOM instead of updating all of the objects.

When the state of an object changes in a React application, VDOM gets updated. It then compares its previous state and then updates only those objects in the real DOM instead of updating all of the objects.

[List of imp 500 react questions that can be asked]("https://github.com/sudheerj/reactjs-interview-questions")
