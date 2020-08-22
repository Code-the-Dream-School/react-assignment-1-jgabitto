import React from 'react';
import Board from './Board';
import Info from './Info';
import Header from './Header';
import ChooseImage from './ChooseImage';
import ImgX from '../images/1.png';
import ImgO from '../images/0.png';

class App extends React.Component {
  state = {showHeaderBtn: true, showInfo: false, showBoard: false, showImg: false, ref: '', values: {x:[], o:[]}, turn: '', player1Name: '', player2Name: '', winner: '', reset: false};

  infoFunction = () => {
    this.setState({showInfo: true, showHeaderBtn: false})
  }

  chooseImgFunction = () => {
    if (this.state.player1Name === '' && this.state.player2Name === '') {
      alert('Please enter a name for both players');
      return;
    }

    if (this.state.player1Name === '') {
      alert('Please enter a name for player 1');
      return;
    } else if (this.state.player2Name === '') {
      alert('Please enter a name for player 2');
      return;
    }
    this.setState({showImg: true})
  }

  boardFunction = () => {
    // if (this.state.player1Name === '' && this.state.player2Name === '') {
    //   alert('Please enter a name for both players');
    //   return;
    // }

    // if (this.state.player1Name === '') {
    //   alert('Please enter a name for player 1');
    //   return;
    // } else if (this.state.player2Name === '') {
    //   alert('Please enter a name for player 2');
    //   return;
    // }

    this.setState({showBoard: true})
  }

  handlePlayer1NameChange = (event) => {
    this.setState({player1Name: event.target.value});
  }

  handlePlayer2NameChange = (event) => {
    this.setState({player2Name: event.target.value});
  }

  checkWinner = (values) => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          for (let k = 0; k < 9; k++) {
            if (i !== j && i !== k && j !== k) {
              if (values.x[i] + values.x[j] + values.x[k] === 15) {
                this.setState({winner: this.state.player1Name })
                return;
              }

              if (values.o[i] + values.o[j] + values.o[k] === 15) {
                this.setState({winner: this.state.player2Name})
                return;
              }

            }
          }
        }
      }
  }
  

  changePlayerTurn = (ref) => {
    if (this.state.turn === '') {
      ref.current.src = ImgX;
      const xValues = [...this.state.values.x, parseInt(ref.current.alt)];
      const oValues = [...this.state.values.o];
      const newValues = {x: xValues, o: oValues};
      this.setState({turn: ImgO, ref, values: newValues, reset: false})
      this.checkWinner(newValues)
    } else if (this.state.turn === ImgX) {
      ref.current.src = ImgX;
      const xValues = [...this.state.values.x, parseInt(ref.current.alt)];
      const oValues = [...this.state.values.o];
      const newValues = {x: xValues, o: oValues};
      this.checkWinner(newValues)
      this.setState({turn: ImgO, ref, values: newValues, reset: false})
    } else {
      ref.current.src = ImgO;
      const xValues = [...this.state.values.x];
      const oValues = [...this.state.values.o, parseInt(ref.current.alt)];
      const newValues = {x: xValues, o: oValues};
      this.checkWinner(newValues)
      this.setState({turn: ImgX, ref, values: newValues, reset: false})
    }
  }

  restartGame = () => {
    this.setState({showInfo: false, showHeaderBtn: true, showImg: false, showBoard: false, ref: '', values: {x:[], o:[]}, turn: '', winner: false, player1Name: '', player2Name: '', reset: false})
  }

  resetGame = () => {
    this.setState({showInfo: false, showHeaderBtn: false, showImg: false, showBoard: true, ref: '', values: {x:[], o:[]}, turn: '', winner: false, reset: true});
  }

  render(){
    let component;

    if (this.state.showInfo) {
      component = <Info chooseImgFunction={this.chooseImgFunction} boardFunction={this.boardFunction} player1Name={this.state.player1Name} player2Name={this.state.player2Name} handlePlayer1Change={this.handlePlayer1NameChange} handlePlayer2Change={this.handlePlayer2NameChange}/>;
    }

    if (this.state.showImg) {
      component = <ChooseImage boardFunction={this.boardFunction}/>;
    }

    if (this.state.showBoard) {
      component = <Board player1Name={this.state.player1Name} player2Name={this.state.player2Name} changePlayerTurn={this.changePlayerTurn} turn={this.state.turn} cellRef={this.state.ref} restartGame={this.restartGame} resetGame={this.resetGame} valuesArray={this.state.values} winner={this.state.winner} reset={this.state.reset}/>;
    }

    return (
      <div className="container">
        <div className="center">
          <Header />
          {this.state.showHeaderBtn ? <button onClick={this.infoFunction} className="btn btn-dark niceFont">Start</button>: null}
        </div>
          {component}
        </div>
    );
  }
}

export default App;
