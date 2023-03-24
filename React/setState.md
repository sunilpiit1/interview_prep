[Nice article on setState]("https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b")

## STATE

State represents component level information about a react element, this can only be updated using the setState function once declared in the constructor.....but a lifecycle method called getDerivedStateFromProps acn actually alter our state...but i don't recommend using it.

## HOW SETSTATE WORKS?

setState is used to update state of your react element, it's an async function, which means state won't be updated instantly.

There is a reason why setState are kept async, this is because every setState causes re-rendering, but let's say we have multiple setState in line then we will be doing unnecessary re-renders. So, react does this batch updates to state causing less renders.

When you call setState react schedules the state update for you. React also listens to all the state updates for all the elements in the dom, so when you state updates, react mark that element and it's children dirty and re-renders them generating a new dom, this dom is then compared to previous dom (that is being used as browser-dom) and by reacts diffing/reconciliation algorithm changes are detected and updates happens for the elements.

> Every props and state change makes an element to go though a series of lifecycle events.
