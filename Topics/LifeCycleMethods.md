# [Full Stack Data Flow](https://drive.google.com/file/d/1-YVRZlTVPLoklw7fBWQ8OUMhs56XY2do/view)

## What happens when we click "Add to Cart?"

- Cart is created with React

## What is React?

- The main purpose of React is **to keep UI and state in sync**
- Creates an uniform framework for developing user interface

## Component Lifecycle

- When we render a component, React components go through several different stages in addition to the "render" stage
  - When a component is created, updated, removed from the web page
- Lifecycle methods allow us to write a code that can be placed in certain place when certain things happen
- React exposes the ability to "hook" into these stages so that we c an perform certain actions ourselves
  - Kind of like a adding an event listener

---

- Initial render
  - `ReactDOM.render` -> render -> mounted component -> `componentDidMount`
- Render
  - This is when the component's render method is invoked
    - Or when the functional component itself is invoked
  - React compares the JSX output of the render method with it's internal "vitual DOM", and makes a decision about how to update the actual DOM in a performant way

## What is the Virtual DOM?

## Thunks

## What is Redux?

## What is Express? (What is Node?)

### HTTP

### API

### Middleware

## What is Sequelize

## What is PostgreSQL

## NoSQL vs SQL

## Back to Redux
