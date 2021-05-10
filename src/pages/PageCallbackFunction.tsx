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
        Now, we start to add a callback to the props, but react starts to render
        not updated peer Components again.
      </p>
      <code>
        <MemoComponentWithCallback name={inputVal1} callback={callback1} />
      </code>
      <p>What Happened?</p>
      <p>
        It turns out that react Component would create a new function and assign
        it to a different memory address.
      </p>
      <p>
        No worries, <code>React.useCallback</code> comes to the rescue. It will
        cache the function value and use it again instead of create a new one.
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
      <div>
        <code>
          <pre>
            {`

    const callback2 = useCallback(() => {
      console.log("callback2");
    }, []);
    <MemoComponentWithCallback name="static name" callback={callback2} />
       `}
          </pre>
        </code>
      </div>
      <p>
        Or Yes, "static name" is not rendered when we need to render the peer
        Component now.
      </p>
    </div>
  );
}

export default UseCallbackFucntion;
