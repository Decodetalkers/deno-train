import { SquareBak } from "~/islands/Square.tsx";

export function Board() {
  return (
    <>
      <div className="board-row">
        <SquareBak />
        <SquareBak />
        <SquareBak />
      </div>
      <div className="board-row">
        <SquareBak />
        <SquareBak />
        <SquareBak />
      </div>
      <div className="board-row">
        <SquareBak />
        <SquareBak />
        <SquareBak />
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
