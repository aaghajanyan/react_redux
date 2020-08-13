import React from 'react';
import './App.scss';
import Counter from './components/Counter';

function App() {

  return (
    <div className="App">
        <Counter />
    </div>
  );
}

export default App;























// Class component
// import React from "react";
// import "./App.scss";
// import Counter from "./class_components/Counter";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//       updated: {
//         value: false
//       }
//     };
//   }

  // updateParent = () => {
  //   this.setState((prevState) => {
  //     return {
  //       updated: {...prevState.updated, value: prevState.updated.value}
  //     }
  //   });
  // }

//   componentWillMount() {
//     console.log("Component WILL MOUNT!");
//   }
//   componentDidMount() {
//     console.log("Component DID MOUNT!");
//   }
//   componentWillReceiveProps(newProps) {
//     console.log("Component WILL RECIEVE PROPS!");
//   }
//   shouldComponentUpdate(newProps, newState) {
//     return true;
//   }
//   componentWillUpdate(nextProps, nextState) {
//     console.log("Component WILL UPDATE!");
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("Component DID UPDATE!");
//   }
//   componentWillUnmount() {
//     console.log("Component WILL UNMOUNT!");
//   }

//   render() {
//     console.log("Component RENDER");

//     return (
//       <div className="App">
//         <Counter updateParent={this.updateParent} updated={this.state.updated}/>
//       </div>
//     );
//   }
// }

// export default App;
