import React, {Component}  from 'react';
import windowSize from 'react-window-size';
import Confetti from 'react-confetti';
import Cell from './Cell';
import ImgX from '../images/1.png';
import ImgO from '../images/0.png';

class Board extends Component {
  confettiWinner = () => {
    const width = this.props.windowWidth;
    const height = this.props.windowHeight;

    if (this.props.winner) {
      return <Confetti width={width} height={height}/>;
    }
  }

  render(){
    let message;
    if (this.props.winner) {
      if (this.props.winner === this.props.player1Name) {
        message = <p><strong>Game over:</strong> {this.props.player2Name} sucks!</p>;
      } else if (this.props.winner === this.props.player2Name) {
        message = <p><strong>Game over:</strong> {this.props.player1Name} sucks!</p>;
      } else {
        message = <p><strong>Game over:</strong> You both suck!</p>;
      }
    }

    if (this.props.turn === ImgO && !this.props.winner) {
      message = <p>{this.props.player2Name}'s turn</p>
    } else if (this.props.turn === ImgX && !this.props.winner) {
      message = <p>{this.props.player1Name}'s turn</p>
    }
      return (
        <div>
          <div className="together">
            <p className="niceFont">{this.props.player1Name} <img className="icon" alt="1" src={ImgX}/></p>
            <p className="niceFont">{this.props.player2Name} <img className="icon" alt="0" src={ImgO}/></p>
          </div>
          <div className="together">
            {this.confettiWinner()}
            {message}
          </div>
          <div className="board">
            <div className="row">
              <Cell id="8"  winner={this.props.winner} valuesArray={this.props.valuesArray} resetValue={this.props.reset} changePlayerTurn={this.props.changePlayerTurn} turn={this.props.turn} cellRef={this.props.ref} />
              <Cell id="1"  winner={this.props.winner} valuesArray={this.props.valuesArray} resetValue={this.props.reset} changePlayerTurn={this.props.changePlayerTurn} turn={this.props.turn} cellRef={this.props.ref}/>
              <Cell id="6"  winner={this.props.winner} valuesArray={this.props.valuesArray} resetValue={this.props.reset} changePlayerTurn={this.props.changePlayerTurn} turn={this.props.turn} cellRef={this.props.ref}/>
            </div>
            <div className="row">
              <Cell id="3"  winner={this.props.winner} valuesArray={this.props.valuesArray} resetValue={this.props.reset} changePlayerTurn={this.props.changePlayerTurn} turn={this.props.turn} cellRef={this.props.ref}/>
              <Cell id="5"  winner={this.props.winner} valuesArray={this.props.valuesArray} resetValue={this.props.reset} changePlayerTurn={this.props.changePlayerTurn} turn={this.props.turn} cellRef={this.props.ref}/>
              <Cell id="7"  winner={this.props.winner} valuesArray={this.props.valuesArray} resetValue={this.props.reset} changePlayerTurn={this.props.changePlayerTurn} turn={this.props.turn} cellRef={this.props.ref}/>
            </div>
            <div className="row">
              <Cell id="4"  winner={this.props.winner} valuesArray={this.props.valuesArray} resetValue={this.props.reset} changePlayerTurn={this.props.changePlayerTurn} turn={this.props.turn} cellRef={this.props.ref}/>
              <Cell id="9"  winner={this.props.winner} valuesArray={this.props.valuesArray} resetValue={this.props.reset} changePlayerTurn={this.props.changePlayerTurn} turn={this.props.turn} cellRef={this.props.ref}/>
              <Cell id="2"  winner={this.props.winner} valuesArray={this.props.valuesArray} resetValue={this.props.reset} changePlayerTurn={this.props.changePlayerTurn} turn={this.props.turn} cellRef={this.props.ref}/>
            </div>
          </div>
          <div className="together">
            <button onClick={this.props.restartGame} className="btn btn-dark niceFont">New Game</button>
            <button onClick={this.props.resetGame} className="btn btn-dark niceFont">Reset</button>
          </div>
        </div>
      );
  }
}

export default windowSize(Board);
