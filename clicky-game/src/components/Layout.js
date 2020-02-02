import React, {Component} from "react";
import "./Layout.css";
import TVCard from "../../src/TVdata.json";
import Card from "../components/Card";
import Header from "../components/Header";

class Layout extends Component {
    state = {
        person: TVCard,
        score: 0
    }

    resetGame = () => {
        this.setState({
            score:0,
            person: TVCard
        })
    }

    handleCorrect = newperson => {
        this.setState({
            person: this.shuffleArray(newperson),
            score: this.state.score+1
        });

        if (this.state.score === 11) {
            this.resetGame();
            alert("You won!");
        }
    };

    handleWrong = () => {
        this.resetGame();
    };

    handleClick = name => {
        let guessedCorrect = false;
        const newperson = this.state.person.map(person => {
            const newPic = {...person};
            if (newPic.name === name) {
                if (!newPic.clicked){
                    console.log("Already guessed");
                    newPic.clicked = true;
                    guessedCorrect = true;
                }
            }
            return newPic;
        })
        console.log("Guessed Correct: ", guessedCorrect)
        guessedCorrect ? this.handleCorrect(newperson) : this.handleWrong(newperson)
    };

    shuffleArray = person => {
        for (let i = person.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i +1));
            [person[i], person[j]] = [person[j], person[i]];
        }
        return(person);
    };

    render() {
        return(
            <div>
                <Header score={this.state.score}/>
                <div className="gridWrapper">
                    <div className="grid">
                        {this.state.person.map(person => {
                            return(<Card 
                                name={person.name}
                                key={person.name}
                                handleClick={this.handleClick}
                                src={person.image}
                                alt={person.name}
                                />)
                        })}
                    </div>
                </div>
            </div>
        );
    }


};

export default Layout;