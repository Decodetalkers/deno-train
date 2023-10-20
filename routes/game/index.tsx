import { Game } from "~/islands/Board.tsx";
import { asset, Head } from "$fresh/runtime.ts";
export default function Greet() {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href={asset("style.css")} />
      </Head>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <Game />
      </div>
    </>
  );
}
