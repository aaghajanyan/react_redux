import React from "react";
import { connect } from "react-redux";
import { CounterAction } from "../actions/counterAction";

class Counter extends React.Component {

  componentWillMount() {
    console.log("22222 - Component WILL MOUNT!");
  }
  componentDidMount() {
    console.log("22222 - Component DID MOUNT!");
  }
  componentWillReceiveProps(newProps) {
    console.log("22222 - Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    if (this.props.updated.value === newProps.updated.value && this.props.counter === newProps.counter) {
      return false;
    }
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("22222 - Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("22222 - Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("22222 - Component WILL UNMOUNT!");
  }

  render() {
    console.log("22222 - Component RENDER");

    return (
      <div style={{backgroundColor: 'red', padding: '30px'}}>
        <h1> Counter is: {this.props.counter.value}</h1>
        <button onClick={() => this.props.incressNumber(this.props.counter)}> Incress </button>
        <button onClick={() => this.props.decressNumber(this.props.counter)}> Decress </button>
        <button onClick={() => this.props.updateParent()}> Update Parent </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incressNumber(counter) {
      return dispatch(CounterAction.incressNumber(counter.value));
    },
    decressNumber(counter) {
      return dispatch(CounterAction.decressNumber(counter.value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
