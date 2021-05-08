import { FormEvent, useCallback, useState } from "react";
import MemoComponentWithCallback from "core-ui/MemoComponentWithCallback";

function UseCallbackFucntion() {
  const [inputVal1, setInputVal1] = useState<string>("");
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setInputVal1(e.currentTarget.value);
  };
  const callback1 = useCallback(() => {
    console.log("callback1");
  }, []);
  const callback2 = useCallback(() => {
    console.log("callback2");
  }, []);

  console.log("[render] Page MemoComponent with callback");
  return (
    <div className="page">
      <h4>Memo Component with callbacks</h4>
      input Name and inspect the output from console log:{" "}
      <input type="text" value={inputVal1} onChange={onChange} />
      <MemoComponentWithCallback name={inputVal1} callback={callback1} />
      <MemoComponentWithCallback name="static name" callback={callback2} />
      <br />
      <p>
        However, sometimes if we add some callback to props, react starts to
        render not updated peer components again
      </p>
      <p>
        No worries, <code>React.useCallback</code> comes to the rescue.
      </p>
      <code>
        <pre>
          {`
  const callback2 = () => {
    console.log("callback2");
  };
<MemoComponentWithCallback name="static name" callback={callback2} />
       `}
        </pre>
      </code>
      <p>
        Update
        <code>callback2</code>
        function to below:
      </p>
      <code>
        {`

    const callback2 = useCallback(() => {
      console.log("callback2");
    }, []);
       `}
      </code>
      <p>
        Or Yes, "static name" is not rendered when we need to render the peer
        component now.
      </p>
      <p>
        Similarly, we have tools like <code>React.useMemo</code> and{" "}
        <code>reselect</code> for more advanced memo for different scenarios to
        make react work as expected.
      </p>
    </div>
  );
}

export default UseCallbackFucntion;
