### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    + JavaScript library, developed by Facebook, for building user interfaces, particularly single-page applications where you need a fast and interactive UI. Allows developers to create large web applications that can update and render efficiently in response to data changes. One use in particulare is the ablility to build reusable components. 

- What is Babel?
    + a JavaScript compiler that transforms next-generation JavaScript (ES6+ and beyond) into backward-compatible versions for older browsers 

- What is JSX?
    + JavaScript XML. Allows developers to write HTML-like code directly within JavaScript. This makes the structure of the UI easier to visualize. JSX is is transpiled by Babel into regular JS. 

- How is a Component created in React?
    + Either by function or class. Recently, more commonly by function. 
        ex) 

        import React from "react'
        import Component from "./Component"

        const App = () => {
            return(
                <div>
                    <Component />
                </div>
            )
        }

- What are some difference between state and props?
    + Props: read-only inputs to a component. They are passed from parent to child components and are immutable by the receiving component.
    + State: local data storage that is mutable within the component. Can be modified using the setState function in class components or the useState hook in functional components.


- What does "downward data flow" refer to in React?
    + The one-way data binding in React where data flows from parent to child components through props. This makes the data flow predictable and easier to understand, as only the parent component can change the state, and the updated state is passed down to the children.

- What is a controlled component?
    + A form element in React that derives its value from React state.

- What is an uncontrolled component?
    + A form element that maintains its own internal state rather than relying on React state

- What is the purpose of the `key` prop when rendering a list of components?
    + Helps React identify which components have changed, been added, delted, etc. Each key should be unique.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    + Array indecies are too dynamic. Keys need to be stable, unique, and consistent.

- Describe useEffect.  What use cases is it used for in React components?
    + A hook that allows you to perform side effects in function components. It can be used for tasks such as data fetching, subscriptions, or manually changing the DOM. useEffect runs after every render by default but can be optimized to run only when specific dependencies change.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    + Creates a mutable object with a .current property that persists across renders. Changes to a ref value do not cause a rerender of the component.

- When would you use a ref? When wouldn't you use one?
    +   Would:    
            - Accessing or modifying DOM elements directly (e.g., focusing an input).
            - Storing mutable values that should not cause a rerender (e.g., timers, counters).

        Would Not: 
            - Managing state that affects rendering. For this, you should use state (useState).
            - Passing data between components. Use props or context instead.

- What is a custom hook in React? When would you want to write one?
    + A reusable function that can be passed across your application, while using built in hooks to encapsulate logic. These are not specific to one function in particular. An example is a useToggle hook that can be used across an application to toggle light/dark mode, etc.
