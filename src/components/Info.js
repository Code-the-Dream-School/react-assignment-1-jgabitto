import React, {Component} from 'react';
import ImgX from '../images/1.png';
import ImgO from '../images/0.png';


class Info extends Component {
  render() {
    return (
      <div className="center">
        <div className="form-row">
          <div className="form-group col-md-6 niceFont">
            <label>Name <img className="icon" alt="1" src={ImgX}/></label>
            <input type="text" className="form-control" value={this.props.player1Name} onChange={this.props.handlePlayer1Change}></input>
          </div>
          <div className="form-group col-md-6 niceFont">
            <label>Name <img className="icon" alt="O" src={ImgO}/></label>
            <input type="text" className="form-control" value={this.props.player2Name} onChange={this.props.handlePlayer2Change}></input>
          </div>
        </div>
        <button type="submit" className="btn btn-dark niceFont" onClick={this.props.chooseImgFunction}>Choose your icons</button>
      </div>
    )
  }
}


export default Info;