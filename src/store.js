import { createStore } from "redux";

const initialState = {
  currentValue: 0,
  futureValues: [],
  previousValues: []
};

// action type:
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const UNDO = "UNDO";
export const REDO = "REDO";
//reducer function

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        currentValue: state.currentValue + action.payload,
        futureValues: [],
        previousValues: [state.currentValue, ...state.previousValues]
      };
    case DECREMENT:
      return {
        currentValue: state.currentValue - action.payload,
        futureValues: [],
        previousValues: [state.currentValue, ...state.previousValues]
      };
    case UNDO:
      return {
        currentValue: state.previousValues[0],
        futureValues: [state.currentValue, ...state.futureValues],
        previousValues: state.previousValues.slice(1)
      };
    case REDO:
      return {
        currentValue: state.futureValues[0],
        futureValues: state.futureValues.slice(1),
        previousValues: [state.currentValue, ...state.previousValues]
      };

    default:
      return state;
  }
}

// console.log(createStore(counter).getState());
// same as store.getState() in src/Counter.js

export default createStore(counter);
