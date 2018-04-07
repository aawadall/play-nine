
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import _ from 'lodash';

const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random()*9);
  return (
    <div className="col-5">
        {_.range(numberOfStars).map(i=>
          <i key={i} className="fas fa-smile" aria-hidden="true"></i>
        )}
    </div>
  );
};

const Button = (props) => {
  return (
    <div className="col-2">
      <button>=</button>
    </div>
  );
};

const Answer = (props) => {
  return (
    <div className="col-5">
        {props.selectedNumbers.map((number, i) =>
            <span key={i}>{number}</span>
        )}
    </div>
  );
};


const Numbers = (props) => {
  //const arrayOfNumbers = _.range(1, 10);
    const numberClassName = (number) => {
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    };
  return (
    <div className="card text-center">
    <div>
        {Numbers.list.map((number, i) =>
          <span key={i} className={numberClassName(number)}
                onClick={() => props.selectNumber(number)}>
              {number}
              </span>
        )}
    
      </div>
    </div>
  )
};

Numbers.list = _.range(1, 10);


class Game extends Component {
  state = {
      selectedNumbers : [],
  };

  selectNumber = (clickedNumber) => {
      this.setState(prevState => ({
          selectedNumbers:prevState.selectedNumbers.concat(clickedNumber)
      }));
  };
    render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers}/>
        </div>
        <Numbers selectedNumbers={this.state.selectedNumbers}
                 selectNumber={this.selectNumber}/>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
        <Game />
      </div>
    );
  }
}

export default App;
