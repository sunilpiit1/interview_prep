## PURE FUNCTIONS

Pure Components do not depend or modify the state of variables outside their scope. These are the building blocks of Functional Programming. Before we get into the details of Pure Components in React, we need to understand the concept of Pure Functions in JavaScript.

Main Advantage of using pure functions is that you can memoize their result, that can be used for the next time the function is called.

## PURE COMPONENTS

Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered. Pure Components restricts the re-rendering ensuring the higher performance of the Component

### Features of React Pure Components

- Prevents re-rendering of Component if props or state is the same
- Takes care of “shouldComponentUpdate” implicitly
- State and Props are Shallow Compared
- Pure Components are more performant in certain cases

### HOW TO IMPLEMENT PURE COMPONENTS IN FUNCTION BASED COMPONENT

For class based components we already have a class called "PureComponent" which handles this rendering stuff internally.

In case of functions we can use React.memo, useMemo and useCallback to memoise our component, arrays and function respectively and can save ourselves from re-renders.

[Nice article for reference]("https://medium.com/technofunnel/working-with-react-pure-components-166ded26ae48")
