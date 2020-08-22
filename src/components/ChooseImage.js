import React, {Component}  from 'react';
import Ronaldo from '../images/ronaldo.jpg';
import Messi from '../images/messi.jpg';
import ImgX from '../images/1.png';
import ImgO from '../images/0.png';

class ChooseImage extends Component {
    render() {
        return (
          <div className="center">
            <div className="form-row">
              <div className="form-group col-md-6 niceFont">
                <img className="icon" alt="1" src={ImgX}/>
              </div>
              <div className="form-group col-md-6 niceFont">
                <img className="icon" alt="O" src={ImgO}/>
              </div>
            </div>
            <button type="submit" className="btn btn-dark niceFont" onClick={this.props.boardFunction}>Start Game</button>
          </div>
        )
    }
}
export default ChooseImage;
