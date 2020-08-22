import React from 'react';
import Image from '../images/logo.png';

const Header = (props) => {
    return (
      <React.Fragment>
        <img className="logo" alt={1} src={Image} />
        <h1 className="niceFont">TIC TAC TOE</h1>
        {/* { props.showState.showHeader ? <Info boardFunction={props.boardFunction} infoFunction={props.infoFunction} showState={props.showState} onChange={props.handleChange}/>: <button onClick={props.headerFunction} className="btn btn-dark niceFont">Start</button> } */}
      </React.Fragment>
    );
}

export default Header;
