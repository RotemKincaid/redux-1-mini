import React, { Component } from "react";
import store, { INCREMENT, DECREMENT, UNDO, REDO } from "./store";

// methods on the store
// - getState() => get the state from the store
// - dispatch({value, action}) => notify reducer of incoming action
// - subscribe(callback) => update local state of component when global state changes

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: store.getState()
    };
  }

  componentDidMount() {
    // subscribe will listen for updates to the store and run a callback function after every dispatch
    store.subscribe(() => {
      // on each update, set state with the new store state
      this.setState({
        store: store.getState()
      });
    });
  }

  increment(amount) {
    store.dispatch({ payload: amount, type: INCREMENT });
  }

  decrement(amount) {
    store.dispatch({ payload: amount, type: DECREMENT });
  }

  undo() {
    store.dispatch({ type: UNDO });
  }

  redo() {
    store.dispatch({ type: REDO });
  }

  render() {
    const { currentValue, previousValues, futureValues } = this.state.store;
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => this.increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => this.increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => this.decrement(1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => this.decrement(5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={previousValues.length === 0}
              onClick={() => this.undo()}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={futureValues.length === 0}
              onClick={() => this.redo()}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.state.store, null, 2)}</pre>
        </section>
      </div>
    );
  }
}

export default Counter;
