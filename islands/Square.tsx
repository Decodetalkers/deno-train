import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

export function SquareBak() {
  const [value, setValue] = useState<string | null>(null);
  const onClicked = () => {
    setValue("X");
  };

  return <button className="square" onClick={onClicked}>{value}</button>;
}

interface SquareProp {
  value?: string | number | null;
  onSquareClicked?: JSX.MouseEventHandler<HTMLButtonElement> | undefined;
}

function Square({ value, onSquareClicked }: SquareProp) {
  return <button className="square" onClick={onSquareClicked}>{value}</button>;
}

export function Board() {
  const [squares, setSquares] = useState<Array<number | string | null>>(
    Array(9).fill(null),
  );
  const handleClick = (index: number) => {
    const nextSquares = squares.slice();
    nextSquares[index] = "X";
    setSquares(nextSquares);
  };
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClicked={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClicked={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClicked={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClicked={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClicked={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClicked={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClicked={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClicked={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClicked={() => handleClick(8)} />
      </div>
    </>
  );
}
