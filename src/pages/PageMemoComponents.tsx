/*
This page will demo use React Component without React.memo
*/
import { useState, FormEvent } from "react";
import MemoComponent1 from "core-ui/MemoComponent";

function UseMemoComponent() {
  const [inputVal1, setInputVal1] = useState<string>("");
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setInputVal1(e.currentTarget.value);
  };

  console.log("[render] Page MemoComponent");
  return (
    <div className="page">
      <h3>Memo Component</h3>
      Input Name and inspect the output from console log:{" "}
      <input type="text" value={inputVal1} onChange={onChange} />
      <MemoComponent1 name={inputVal1} />
      <MemoComponent1 name="static name" />
      <br />
      <p>
        All we did was wrap the component with <code>React.memo</code>
      </p>
      <p>Or Yes, haha, "static name" is not rendered now. Magic!</p>
      <div>
        <code>
          {`import {memo} from "react";`} <br />
          {`import NormalComponent from "./NormalComponent";`} <br />
          {`export default memo(NormalComponent);`} <br />
        </code>
      </div>
    </div>
  );
}

export default UseMemoComponent;
