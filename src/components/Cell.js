import React, {Component}  from 'react';


class Cell extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  changePlayerTurn = () => {
    if (this.myRef.current.classList[0] === 'squareIcon') {
      alert('You already have entered a value here!')
      return;
    }

    if (this.props.winner) {
      alert('Game over!')
      return;
    }
    this.myRef.current.setAttribute('alt', this.props.id)
    this.myRef.current.setAttribute('src', this.props.ref)
    this.myRef.current.setAttribute('class', 'squareIcon')
    this.props.changePlayerTurn(this.myRef)
  }

render() {

  if (this.props.resetValue) {
    this.myRef.current.removeAttribute('alt')
    this.myRef.current.removeAttribute('src')
    this.myRef.current.removeAttribute('class')

  }

  return (
    <button onClick={this.changePlayerTurn} className="square btn btn-outline-dark" ><img ref={this.myRef} /></button>
  )
}

}
export default Cell;
