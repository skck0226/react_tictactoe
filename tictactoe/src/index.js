import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Square(props){
	return (
		<button className="square" onClick={props.onClick} >	
			{props.value}
		</button>
	);
}

function Board(){
	const [square,setSquare] = useState([null,null,null,null,null,null,null,null,null]);
	const [isX,setIsX] = useState(true);
	const [end,setEnd] = useState('E');
	const handleClick = (i)=>{	
		if(isX){
			setIsX(false);
			let arr=[
					...square.slice(0,i),
					'X',
					...square.slice(i+1)
				]
			setSquare(arr);
			console.log(square)
		}
		else{
			setIsX(true);
			let arr=[
					...square.slice(0,i),
					'O',
					...square.slice(i+1)
				]
			setSquare(arr);
		}
		
	}
	useEffect(() => {
		const squares = square.slice();
		console.log(squares)		
		if(calculateWinner(squares)!=null){
			setEnd(calculateWinner(squares));
			console.log(calculateWinner(squares))	
		}
		if(end=='X') alert('X')
		else if(end=='O') alert('O') 
	});	
	const renderSquare = (i) => {
		return <Square value={square[i]} onClick={()=>handleClick(i)}/>;
	}
	const status = 'Next player: ' + (isX?'X':'O') ;
	
	return (
	  <div>
		<div className="status">{status}</div>
		<div className="board-row">
			{renderSquare(0)}
			{renderSquare(1)}
			{renderSquare(2)}
		</div>
		<div className="board-row">
			{renderSquare(3)}
			{renderSquare(4)}
			{renderSquare(5)}
		</div>
		<div className="board-row">
			{renderSquare(6)}
			{renderSquare(7)}
			{renderSquare(8)}
		</div>
	  </div>
	);
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
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}