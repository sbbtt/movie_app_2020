import React from 'react';

class App extends React.Component {
  state={
    count: 0,
  };

  constructor(props){
    super(props);
    console.log('hello');
  }

  add = () => {
    this.setState(current => ({
      count: current.count +1 
    }));
  };
  
  minus = () => {
    this.setState(current=>({
      count: current.count -1 
    }));
  };

componentDidMount(){
  console.log('component rendered');
}

componentDidUpdate(){
  console.log('I just updated')
}

componentWillUnmount(){
  console.log('Goodbye, cruel world!')
}

  render(){
    console.log("I'm rendering");
    return(
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;