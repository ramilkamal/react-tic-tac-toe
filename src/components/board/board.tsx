import { useState } from "react";
import { Square } from "../square/square";
import { CalculateWinner } from "../calculate-winner/calculate-winner";

const massiv = Array(9).fill(null);

export const Board: React.FC = () => {
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [squares, setSquares] = useState<string[]>(massiv);

    const winner = CalculateWinner(squares);
    let status: string;
    if (winner) {
        status = "Winner: " + winner;
    }
    else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    const handleClick = (i: number) => {
        if (squares[i] || CalculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) nextSquares[i] = "X";
        else nextSquares[i] = "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    };

    return (
        <div className="board">
            <div className="status">{status}</div>
            <div className="board-row">
                <Square
                    value={squares[1]}
                    onSquareClick={() => handleClick(1)}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => handleClick(2)}
                />
                <Square
                    value={squares[3]}
                    onSquareClick={() => handleClick(3)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[4]}
                    onSquareClick={() => handleClick(4)}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => handleClick(5)}
                />
                <Square
                    value={squares[6]}
                    onSquareClick={() => handleClick(6)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[7]}
                    onSquareClick={() => handleClick(7)}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => handleClick(8)}
                />
                <Square
                    value={squares[9]}
                    onSquareClick={() => handleClick(9)}
                />
            </div>
        </div>
    );
};
