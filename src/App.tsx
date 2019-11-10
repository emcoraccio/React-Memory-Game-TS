import React, { Component } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    clicked: [0],
    feedback: "Click a picture to start. Don't click any pictures more than once."
  };

  changeScore = (set: string) => {

    if (set === "increase") {
      if (this.state.score === this.state.topScore || this.state.score === 11) {
        const feedback = this.state.score === 11 ? "You Win!" : "Correct!";
        const score = this.state.score === 11 ? 0 : this.state.score + 1;
        this.setState({
          score,
          topScore: this.state.score + 1,
          feedback
        });
      }
      else {
        this.setState({
          score: this.state.score + 1,
          feedback: "Correct!"
        });
      };
    }
    else if (set === "reset") {
      this.setState({
        score: 0,
        feedback: "Game Over"
      });
    };
  };


  clickImage = (imageId: number) => {
    if (this.state.clicked.indexOf(imageId) === -1) {

      const clicked = this.state.clicked.length === 11 ? [0] : [...this.state.clicked, imageId]

      this.setState({
        clicked
      });
      this.changeScore("increase");

    }
    else {

      this.changeScore("reset");
      this.setState({
        clicked: [0]
      });

    };

  }


  render() {

    return (
      <div className="container">
        <Header {...this.state} />
        <CardContainer clickImage={this.clickImage}/>
      </div>
    );

  }

};

export default App;


