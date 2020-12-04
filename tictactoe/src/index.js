import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Square(props){
	const [value,setValue] = useState(props.prop);
	const changeX = ()=>{
		setValue('X')
		console.log('x')
	}
	return (
		<button className="square" onClick={changeX}>
			{value}
		</button>
	);
}

class Board extends React.Component {
  renderSquare(i) {
	  console.log('rerender')
    return <Square prop={i} />;
  }

  render() {
    const status = 'Next player: X';
	
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
