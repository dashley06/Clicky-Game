import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import person from "../src/TVdata.json"
import Score from "./components/scores";
//import Layout from "./components/Layout";
import "./App.css";

class App extends Component {
  // Setting this.state.pups to the cards json array
  state = {
    person,
    clickedIds: [],
    score: 0,
    goal: 10,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedIds = this.state.clickedIds;

    if(clickedIds.includes(id)){
      this.setState({ clickedIds: [], score: 0, status:  "Game Over! You already selected that person. Click to play again!" });
      return;
    }else{
      clickedIds.push(id)

      if(clickedIds.length === 10){
        this.setState({score: 10, status: "Winner! Great Job! Click to play again!", clickedIds: []});
        return;
      }

      this.setState({ person, clickedIds, score: clickedIds.length, status: " " });

      for (let i = person.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [person[i], person[j]] = [person[j], person[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <Header />
        <Score total={this.state.score}
               goal={10}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.person.map(icon => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={icon.id}
              key={icon.id}
              image={icon.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;