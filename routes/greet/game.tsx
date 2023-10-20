import { Board } from "~/components/Board.tsx";
import { asset, Head } from "$fresh/runtime.ts";
export default function Greet() {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href={asset("style.css")} />
      </Head>
      <Board />
    </>
  );
}
