- [ ] Why would you use class component over function components (removing hooks from the question)?

You have access to React Lifecycle methods, as well as it being good design to have a "smart" component sending data to presentational (functional) components.

- [ ] Name three lifecycle methods and their purposes.

1. componentDidMount: Acts as a 'useEffect' hook. Listens for any updates to the DOM & updates the DOM elements
2. componentDidUpdate: Can be used to schedule updates
3. componentWillUnmount: Can be used for clean up

- [ ] What is the purpose of a custom hook?

A custom hook takes stateful logic that needs to be applied to multiple elements and 'packages it up' in a hook, so that it can be easily reused.

- [ ] Why is it important to test our apps?

Testing is important because it brings potential bugs to our attention faster. Also, it allows us to trust the code that we are writing.