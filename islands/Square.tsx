import { useState } from "preact/hooks";

export function Square() {
  const [value, setValue] = useState<string | null>(null);
  const onClicked = () => {
    setValue("X");
  };

  return <button className="square" onClick={onClicked}>{value}</button>;
}
