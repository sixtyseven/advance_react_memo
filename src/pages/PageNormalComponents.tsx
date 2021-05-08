/*
This page will demo use React Component without React.memo
*/
import { useState, FormEvent } from "react";
import NormalComponent from "core-ui/NormalComponent";

function PageNormalComponent() {
  const [inputVal1, setInputVal1] = useState<string>("");
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setInputVal1(e.currentTarget.value);
  };

  console.log("[render] Page ");
  return (
    <div className="page">
      <h3> Component Without Memo</h3>
      Input Name and inspect the output from console log:{" "}
      <input type="text" value={inputVal1} onChange={onChange} />
      <NormalComponent name={inputVal1} />
      <NormalComponent name="static name" />
      <br />
      <p>
        Or no, "static name" has never been updated, but our Robot still renders
        the component. In this case, we definitely don't need the render.
      </p>
    </div>
  );
}

export default PageNormalComponent;
