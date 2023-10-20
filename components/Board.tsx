interface SquareProps {
  value: string;
}

function Square({ value }: SquareProps) {
  return <button className="square">{value}</button>;
}

export function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
//import { JSX } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
//
//export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
//  return (
//    <button
//      {...props}
//      disabled={!IS_BROWSER || props.disabled}
//      class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
//    />
//  );
//}
