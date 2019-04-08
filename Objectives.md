- Student can describe the following vocab in the context of redux: Store, reducer, action, action builder, connect
- Student can describe when to use Redux

## Redux - Stores & Reducers

- Student can setup redux passing a store into a reducer
- Student can create a reducer
- Student can create and dispatch actions
- Student can inititalize default state in a reducer
- Student can update state in a reducer

<img src="https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966"/>

Goal of Redux:

- prevent excessive prop drilling
  - make reusable components that subsribe to the store avoiding passing props through parent
- clientside cache for serverside data
-

common vocab -

store: an object that holds the application state tree (global state object)

- example:

```js
const initialState = {
  someState: { amount: 0, total: 0 }
};
```

action: object that changes state, only way to get data into the store.

plain object that represents an intention to change state

- example:

```js
{
    type: "ADD",
    payload: newAmount
}

```

reducer: function that brings many values to one

- example:

```js
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state.someState, amount: action.payload }
      default:
        return: state
  }
}
```

dispatch function: a function that accepts an action and sends one or more actions to the store (also notifies the application to update)

- example:

```js
store.dispatch({ payload: amount, type: "ADD" });
```

action creator: a function that creates an action

- example:

```js
add(amount){
    return {
        type: "ADD",
        payload: amount
    }
}
```
